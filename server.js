const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');
const nodemailer = require('nodemailer');
const axios = require('axios');
const MongoStore = require('connect-mongo');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/Legaspiclinic', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    email: { type: String, unique: true },
    password: String,
    contactNo: String,
    sex: String,
    age: Number,
    verified: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'legaspidentalclinic0311@gmail.com',
        pass: 'lnmt gzkq zjwg ctns',
    },
});

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/Legaspiclinic',
        collectionName: 'sessions'
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 } // 14 days
}));

app.use(bodyParser.json());

const isAuthenticated = (req, res, next) => {
    if (req.session.userData) {
        next();
    } else {
        res.status(401).json({ message: 'User not authenticated' });
    }
};

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    if (req.session.userData) {
        res.redirect('/client-pages/index-w-acc.html');
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.post('/signup', async (req, res) => {
    try {
        const { email, birthDate, sex, password, firstName, lastName, contactNo } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'The email is already in use' });
        }

        req.session.tempUser = { firstName, lastName, email, password, birthDate, contactNo, sex };

        const verificationLink = `http://localhost:3000/verifyEmail?email=${email}`;
        const mailOptions = {
            from: 'legaspidentalclinic0311@gmail.com',
            to: email,
            subject: 'Email Verification',
            html: `
                <p>Dear ${firstName} ${lastName},</p>
                <p>Thank you for signing up! Please click the button below to verify your email address:</p>
                <a href="${verificationLink}" style="padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a>
                <p>If you did not sign up for our service, you can safely ignore this email.</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'User data received. Email sent for verification.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/verifyEmail', async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ message: 'Email verification failed. Email parameter is missing.' });
        }

        let user = await User.findOne({ email });

        if (!user && req.session.tempUser) {
            const { firstName, lastName, birthDate, contactNo, sex, password } = req.session.tempUser;
            const hashedPassword = await bcrypt.hash(password, 10);

            user = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                birthDate,
                contactNo,
                sex,
                verified: true,
            });
            await user.save();
            req.session.tempUser = null;
        } else if (user) {
            user.verified = true;
            await user.save();
        }

        req.session.userData = {
            ...user._doc,
            password: undefined,
            email: user.email,
            contactNo: user.contactNo,
        };

        return res.redirect('/client-pages/index-w-acc.html');
    } catch (error) {
        console.error('Error during email verification:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/resendVerification', async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            console.error('Resend verification email failed: Email parameter is missing.');
            return res.status(400).json({ message: 'Resend verification email failed. Email parameter is missing.' });
        }

        const verificationLink = `http://localhost:3000/verifyEmail?email=${email}`;
        const mailOptions = {
            from: 'legaspidentalclinic0311@gmail.com',
            to: email,
            subject: 'Email Verification',
            html: `
                <p>Thank you for signing up! Please click the button below to verify your email address:</p>
                <a href="${verificationLink}" style="padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a>
                <p>If you did not sign up for our service, you can safely ignore this email.</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        console.log('Resend verification email successful for:', email);
        res.status(200).json({ message: 'Resend verification email sent successfully.' });
    } catch (error) {
        console.error('Error resending verification email:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const appointmentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    sex: String,
    time: String,
    remarks: String,
    date: String,
    services: [String],
    picture: String,
    totalPrice: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.use(express.json());

app.post('/api/book-appointment', async (req, res) => {
    try {
        const { firstName, lastName, age, sex, time, remarks, date, services, picture } = req.body;

        const newAppointment = new Appointment({
            firstName,
            lastName,
            age,
            sex,
            time,
            remarks,
            date,
            services,
            picture,
        });

        await newAppointment.save();

        res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (err) {
        console.error('Error booking appointment:', err);
        res.status(500).json({ error: 'Error booking appointment' });
    }
});

app.get('/api/appointments/latest', async (req, res) => {
    try {
        const latestAppointment = await Appointment.findOne().sort({ _id: -1 });
        if (!latestAppointment) {
            return res.status(404).json({ error: 'No appointments found' });
        }
        res.json(latestAppointment);
    } catch (err) {
        console.error('Error fetching appointment:', err);
        res.status(500).json({ error: 'Error fetching appointment' });
    }
});






app.post('/api/paid-appointment', async (req, res) => {
    try {
        const { firstName, lastName, age, sex, remarks, date, time, totalPrice } = req.body;

        const appointment = new Appointment({
            firstName,
            lastName,
            age,
            sex,
            remarks,
            date,
            time,
            services,
            totalPrice,
        });

        await appointment.save();

        res.status(201).json({
            message: 'Appointment booked successfully',
            appointmentId: appointment._id,
        });
    } catch (error) {
        console.error('Error booking appointment:', error);
        res.status(500).json({ error: 'Failed to book appointment' });
    }
});



app.delete('/api/appointments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await Appointment.findByIdAndDelete(id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.json({ message: 'Appointment canceled successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email, password });
        if (admin) {
            req.session.userData = {
                ...admin._doc,
                password: undefined,
                email: admin.email,
            };
            return res.json({ message: 'Admin login successful', isAdmin: true });
        }

        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            req.session.userData = {
                ...user._doc,
                password: undefined,
                email: user.email,
                contactNo: user.contactNo,
            };
            return res.json({ message: 'User login successful', isAdmin: false });
        }

        res.status(401).json({ message: 'Invalid email or password' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/user', (req, res) => {
    if (req.session.userData) {
        res.json(req.session.userData);
    } else {
        res.status(401).json({ message: 'User not logged in' });
    }
});

const PAYMONGO_SECRET_KEY = 'sk_test_Rq1Ays4iEusfXU8diWcdLCjN';
app.post('/create-payment-intent', async (req, res) => {
    const { amount, services } = req.body;

    if (!amount || amount <= 0 || !Array.isArray(services) || services.length === 0) {
        return res.status(400).send({ error: 'Invalid amount or services.' });
    }

    try {
        const options = {
            method: 'POST',
            url: 'https://api.paymongo.com/v1/links',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: `Basic ${Buffer.from(PAYMONGO_SECRET_KEY).toString('base64')}`,
            },
            data: {
                data: {
                    attributes: {
                        amount: amount * 100,
                        description: 'Dental Services Payment',
                        remarks: services.join(', '),
                    },
                },
            },
        };

        const response = await axios.request(options);
        const checkoutUrl = response.data.data.attributes.checkout_url;
        res.send({ checkout_url: checkoutUrl });
    } catch (error) {
        console.error('Error creating payment link:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.post('/validate-password', isAuthenticated, async (req, res) => {
    try {
        const { currentPass } = req.body;
        const user = await User.findById(req.session.userData._id);

        if (user && (await bcrypt.compare(currentPass, user.password))) {
            res.json({ message: 'Current password is valid' });
        } else {
            res.status(401).json({ message: 'Current password is invalid' });
        }
    } catch (error) {
        console.error('Error validating password:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/update-user-info', isAuthenticated, async (req, res) => {
    try {
        const { firstName, lastName, birthDate, contactNo, sex } = req.body;
        const user = await User.findById(req.session.userData._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.birthDate = birthDate || user.birthDate;
        user.contactNo = contactNo || user.contactNo;
        user.sex = sex || user.sex;

        await user.save();

        req.session.userData = {
            ...req.session.userData,
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.birthDate,
            contactNo: user.contactNo,
            sex: user.sex,
        };

        res.json({ message: 'User information updated successfully' });
    } catch (error) {
        console.error('Error updating user information:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/change-password', isAuthenticated, async (req, res) => {
    try {
        const { currentPass, newPass } = req.body;
        const user = await User.findById(req.session.userData._id);

        if (user && (await bcrypt.compare(currentPass, user.password))) {
            const hashedNewPassword = await bcrypt.hash(newPass, 10);
            user.password = hashedNewPassword;
            await user.save();

            res.json({ message: 'Password changed successfully' });
        } else {
            res.status(401).json({ message: 'Current password is invalid' });
        }
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Failed to log out' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
