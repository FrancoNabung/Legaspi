document.addEventListener('DOMContentLoaded', async function () {
    const populateUserData = async () => {
        try {
            const response = await fetch('http://localhost:3000/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                const userData = await response.json();
                document.getElementById('bookFirstName').textContent = userData.firstName;
                document.getElementById('bookLastName').textContent = userData.lastName;
                document.getElementById('clientID').textContent = userData._id;
                document.getElementById('bookAge').textContent = userData.age;
                document.getElementById('sex').textContent = userData.sex;
                document.getElementById('bookEmail').textContent = userData.email;
                document.getElementById('bookContactNo').textContent = userData.contactNo;

                enableBookingForm();
            } else {
                const result = await response.json();
                alert(result.message);

                disableBookingForm();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const enableBookingForm = () => {
        const bookingForm = document.getElementById('booking-form');
        bookingForm.addEventListener('submit', submitBookingForm);
        bookingForm.classList.remove('disabled');
    };

    const disableBookingForm = () => {
        const bookingForm = document.getElementById('booking-form');
        bookingForm.removeEventListener('submit', submitBookingForm);
        bookingForm.classList.add('disabled');
    };

    const checkBookingLimit = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3000/bookings/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                const bookings = await response.json();
                return bookings.length;
            } else {
                const result = await response.json();
                alert(result.message);
                return 0;
            }
        } catch (error) {
            console.error(error);
            return 0;
        }
    };

    const submitBookingForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const date = eventDate.innerText; // Get the selected date
        const userId = document.getElementById('clientID').textContent; // Get the user ID

        try {
            // Check the current number of bookings
            const currentBookings = await checkBookingLimit(userId);

            if (currentBookings >= 2) {
                alert('You have reached the maximum number of bookings.');
                return;
            }

            const response = await fetch('http://localhost:3000/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bookingData: Object.fromEntries(formData),
                    date: date, // Include the date in the booking data
                }),
                credentials: 'include',
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
            } else {
                const result = await response.json();
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    populateUserData();

    document.getElementById('continue').addEventListener('click', async () => {
        const selectedTime = document.querySelector('.time button.selected');
        if (!selectedTime) {
            alert("Please select a time slot before proceeding.");
            return;
        }
    
        const firstName = document.getElementById('bookFirstName').innerText;
        const lastName = document.getElementById('bookLastName').innerText;
        const age = document.getElementById('bookAge').innerText;
        const sex = document.getElementById('sex').innerText;
        const remarks = document.getElementById('remarks').value;
    
        const time = selectedTime.getAttribute('data-time');
        const date = eventDate.innerText; // Get the selected date
    
        try {
            const response = await fetch('/api/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, age, sex, time, remarks, date }) 
            });
    
            if (!response.ok) {
                throw new Error('Failed to book appointment');
            }
    
            window.location.href = './payment-method.html'; // Redirect to payment page
        } catch (error) {
            console.error('Error booking appointment:', error);
        }
    });
    
});



function handleCancelClick() {
    document.querySelectorAll('.time button').forEach(btn => {
        btn.classList.remove('selected');
        addEventWrapper.classList.remove("active");
    });
}

document.getElementById('cancel').addEventListener('click', handleCancelClick);
document.getElementById('confirm').addEventListener('click', handleConfirmClick);

let dark_overlay = document.getElementById("dark-modal-overlay");
let book_areyousure = document.getElementById("book-areyousure");
let book_forsomeone = document.getElementById("book-forsomeone");
let book_close = document.getElementById("book_close");

function bookClose() {
    dark_overlay.style.display = 'none';
    book_areyousure.style.display = 'none';
    book_forsomeone.style.display = 'none';
}

function Openbookforsomeone() {
    book_forsomeone.style.display = "block";
    book_areyousure.style.display = 'none';
    dark_overlay.style.display = 'block';
}

function bookForSomeoneElse() {
    book_areyousure.style.display = "block";
    dark_overlay.style.display = 'block';
}

function detailsInput() {
    book_forsomeone.style.display = 'block';
    book_areyousure.style.display = 'none';
}
