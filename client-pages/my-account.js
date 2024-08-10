//buttons
let btn_close = document.getElementById("btn-close");
let edit_password_btn = document.getElementById("edit-password-btn");
let logout_btn = document.getElementById("logout-btn"); 
let reschedule_btn = document.getElementById("reschedule-btn");
let cancel_appointment_btn = document.getElementById("cancel-appointment-btn");
let book_appointment_btn = document.getElementById("book-appointment-btn");
let btn_my_details = document.getElementById("btn-my-details");
let btn_appointment = document.getElementById("btn-appointment");
let btn_third_div = document.getElementById("btn-third-div");
//Modals
let dark_overlay = document.getElementById("dark-modal-overlay");
let edit_password = document.getElementById("edit-password");
let logout_content = document.getElementById("logout-content"); 
let reschedule = document.getElementById("reschedule");
let cancel_appointment = document.getElementById("cancel-appointment");
let book_appointment = document.getElementById("book-appointment");
let my_details = document.getElementById("my-details");
let appointment = document.getElementById("appointment");
let third_div = document.getElementById("third-div");
//functions
function mydetailsOpen() {
    my_details.style.display = 'flex';
    appointment.style.display = 'none';
    third_div.style.display = 'none';
    btn_my_details.style.color = '#1064AD';
    btn_my_details.style.backgroundColor= '#53a9f03a';
    btn_appointment.style.color = '#5e5e5e';
    btn_appointment.style.backgroundColor='#ECF0F6';
    btn_third_div.style.color = '#5e5e5e';
    btn_third_div.style.backgroundColor='#ECF0F6';
    mobileNav.classList.remove('is-active');
    hamburgerMenu.classList.remove('is-active');
}
function appointmentOpen() {
    my_details.style.display = 'none';
    appointment.style.display = 'flex';
    third_div.style.display = 'none';
    btn_my_details.style.color = '#5e5e5e';
    btn_my_details.style.backgroundColor= '#ECF0F6';
    btn_appointment.style.color = '#1064AD';
    btn_appointment.style.backgroundColor='#53a9f03a';
    btn_third_div.style.color = '#5e5e5e';
    btn_third_div.style.backgroundColor='#ECF0F6';
}
function historyOpen() {
    my_details.style.display = 'none';
    appointment.style.display = 'none';
    third_div.style.display = 'flex';
    btn_my_details.style.color = '#5e5e5e';
    btn_my_details.style.backgroundColor= '#ECF0F6';
    btn_appointment.style.color = '#5e5e5e';
    btn_appointment.style.backgroundColor='#ECF0F6';
    btn_third_div.style.color = '#1064AD';
    btn_third_div.style.backgroundColor='#53a9f03a';
}
function closeModal() {
    dark_overlay.style.display='none';
    edit_password.style.display='none';
    logout_content.style.display='none';
    reschedule.style.display='none';
    cancel_appointment.style.display='none';
    book_appointment.style.display='none';
}
function editpass() {
    dark_overlay.style.display='block';
    edit_password.style.display='flex';
}
function logout() {
    dark_overlay.style.display='block';
    logout_content.style.display='flex';
}
function resched() {
    dark_overlay.style.display='block';
    reschedule.style.display='flex';
}
function cancelappointment() {
    dark_overlay.style.display='block';
    cancel_appointment.style.display='flex';
}
function bookappointment() {
    dark_overlay.style.display='block';
    book_appointment.style.display='flex';
}
// Toggle hamburger menu on or off (Mobile)
window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}
// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Get the hamburger menu element
const hamburgerMenu = document.querySelector('.hamburger');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.remove('is-active'); // Remove 'is-active' class to hide the navigation
        hamburgerMenu.classList.remove('is-active'); // Remove 'is-active' class from hamburger menu
        
    });
});