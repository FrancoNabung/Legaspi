const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'legaspidentalclinic0311@gmail.com',
        pass: 'lnmt gzkq zjwg ctns',
    },
});


function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Function to send OTP via email
async function sendOTP(email) {
    try {
        const otp = generateOTP();

        const mailOptions = {
            from: {
                name: 'Kimberly Legaspi',
                address: 'legaspidentalclinic0311@gmail.com'
            },
            to: email,
            subject: "LEGASPI DENTAL CLINIC - OTP Verification",
            text: `Your OTP (One-Time Password) is: ${otp}`,
            html: `
                <p>Your OTP (One-Time Password) is:</p>
                <h1>${otp}</h1>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('OTP sent successfully:', otp);
        return otp;
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
}

// Example usage
const email = 'recipient@example.com';
sendOTP(email)
    .then((otp) => {
        // Handle success
        console.log('OTP sent to', email, 'is:', otp);
    })
    .catch((error) => {
        // Handle error
        console.error('Failed to send OTP:', error);
    });
