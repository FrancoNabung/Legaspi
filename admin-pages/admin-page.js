//buttons
let btn_dashboard = document.getElementById("btn-dashboard");
let btn_appointment = document.getElementById("btn-appointment");
let btn_sms_reminder = document.getElementById("btn-sms-reminder");
let btn_previews = document.getElementById("btn-previews");
let btn_clients = document.getElementById("btn-clients");
let btn_my_details = document.getElementById("btn-my-details");
let edit_password_btn = document.getElementById("edit-password-btn");
let logout_btn = document.getElementById("logout-btn");
let completed_btn = document.getElementById("completed-btn");
let remarks_btn = document.getElementById("btn-remarks");
//Content
let dashboard = document.getElementById("dashboard");
let appointment = document.getElementById("appointment");
let sms_reminder = document.getElementById("sms-reminder");
let previews = document.getElementById("previews");
let clients = document.getElementById("clients");
let my_details = document.getElementById("my-details");
let edit_password = document.getElementById("edit-password");
let logout_content = document.getElementById("logout-content"); 
let completed_content = document.getElementById("completed-content");
let send_reminder_content = document.getElementById("send-reminder-content");
let remarks_content = document.getElementById("remarks-content");
//Modal
let dark_overlay = document.getElementById("dark-modal-overlay");


function dashboardOpen() {
    dashboard.style.display = 'flex';
    appointment.style.display = 'none';
    sms_reminder.style.display = 'none';
    previews.style.display = 'none';
    clients.style.display = 'none';
    my_details.style.display = 'none';
    remarks_content.style.display = 'none';
    btn_dashboard.style.color = '#1064AD';
    btn_dashboard.style.backgroundColor= '#53a9f03a';
    btn_appointment.style.color = '#5e5e5e';
    btn_appointment.style.backgroundColor='#ECF0F6';
    btn_sms_reminder.style.color = '#5e5e5e';
    btn_sms_reminder.style.backgroundColor= '#ECF0F6';
    btn_previews.style.color = '#5e5e5e';
    btn_previews.style.backgroundColor='#ECF0F6';
    btn_clients.style.color = '#5e5e5e';
    btn_clients.style.backgroundColor='#ECF0F6';
    btn_my_details.style.color = '#5e5e5e';
    btn_my_details.style.backgroundColor='#ECF0F6';
    remarks_btn.style.color = '#5e5e5e';
    remarks_btn.style.backgroundColor = '#ECF0F6';
    mobileNav.classList.remove('is-active');
    hamburgerMenu.classList.remove('is-active');
}
function appointmentOpen() {
    dashboard.style.display = 'none';
    appointment.style.display = 'flex';
    sms_reminder.style.display = 'none';
    previews.style.display = 'none';
    clients.style.display = 'none';
    my_details.style.display = 'none';
    remarks_content.style.display = 'none';
    btn_dashboard.style.color = '#5e5e5e';
    btn_dashboard.style.backgroundColor= '#ECF0F6';
    btn_appointment.style.color = '#1064AD';
    btn_appointment.style.backgroundColor='#53a9f03a';
    btn_sms_reminder.style.color = '#5e5e5e';
    btn_sms_reminder.style.backgroundColor= '#ECF0F6';
    btn_previews.style.color = '#5e5e5e';
    btn_previews.style.backgroundColor='#ECF0F6';
    btn_clients.style.color = '#5e5e5e';
    btn_clients.style.backgroundColor='#ECF0F6';
    btn_my_details.style.color = '#5e5e5e';
    btn_my_details.style.backgroundColor='#ECF0F6';
    remarks_btn.style.color = '#5e5e5e';
    remarks_btn.style.backgroundColor = '#ECF0F6';
    mobileNav.classList.remove('is-active');
    hamburgerMenu.classList.remove('is-active');
}
function smsreminderOpen() {
    dashboard.style.display = 'none';
    appointment.style.display = 'none';
    sms_reminder.style.display = 'flex';
    previews.style.display = 'none';
    clients.style.display = 'none';
    my_details.style.display = 'none';
    remarks_content.style.display = 'none';
    btn_dashboard.style.color = '#5e5e5e';
    btn_dashboard.style.backgroundColor= '#ECF0F6';
    btn_appointment.style.color = '#5e5e5e';
    btn_appointment.style.backgroundColor='#ECF0F6';
    btn_sms_reminder.style.color = '#1064AD';
    btn_sms_reminder.style.backgroundColor= '#53a9f03a';
    btn_previews.style.color = '#5e5e5e';
    btn_previews.style.backgroundColor='#ECF0F6';
    btn_clients.style.color = '#5e5e5e';
    btn_clients.style.backgroundColor='#ECF0F6';
    btn_my_details.style.color = '#5e5e5e';
    btn_my_details.style.backgroundColor='#ECF0F6';
    remarks_btn.style.color = '#5e5e5e';
    remarks_btn.style.backgroundColor = '#ECF0F6';
    mobileNav.classList.remove('is-active');
    hamburgerMenu.classList.remove('is-active');
}
function previewsOpen() {
    dashboard.style.display = 'none';
    appointment.style.display = 'none';
    sms_reminder.style.display = 'none';
    previews.style.display = 'flex';
    clients.style.display = 'none';
    my_details.style.display = 'none';
    remarks_content.style.display = 'none';
    btn_dashboard.style.color = '#5e5e5e';
    btn_dashboard.style.backgroundColor= '#ECF0F6';
    btn_appointment.style.color = '#5e5e5e';
    btn_appointment.style.backgroundColor='#ECF0F6';
    btn_sms_reminder.style.color = '#5e5e5e';
    btn_sms_reminder.style.backgroundColor= '#ECF0F6';
    btn_previews.style.color = '#1064AD';
    btn_previews.style.backgroundColor='#53a9f03a';
    btn_clients.style.color = '#5e5e5e';
    btn_clients.style.backgroundColor='#ECF0F6';
    btn_my_details.style.color = '#5e5e5e';
    btn_my_details.style.backgroundColor='#ECF0F6';
    remarks_btn.style.color = '#5e5e5e';
    remarks_btn.style.backgroundColor = '#ECF0F6';
    mobileNav.classList.remove('is-active');
    hamburgerMenu.classList.remove('is-active');
}
function clientsOpen() {
    dashboard.style.display = 'none';
    appointment.style.display = 'none';
    sms_reminder.style.display = 'none';
    previews.style.display = 'none';
    clients.style.display = 'flex';
    remarks_content.style.display = 'none';
    my_details.style.display = 'none';
    btn_dashboard.style.color = '#5e5e5e';
    btn_dashboard.style.backgroundColor= '#ECF0F6';
    btn_appointment.style.color = '#5e5e5e';
    btn_appointment.style.backgroundColor='#ECF0F6';
    btn_sms_reminder.style.color = '#5e5e5e';
    btn_sms_reminder.style.backgroundColor= '#ECF0F6';
    btn_previews.style.color = '#5e5e5e';
    btn_previews.style.backgroundColor='#ECF0F6';
    btn_clients.style.color = '#1064AD';
    btn_clients.style.backgroundColor='#53a9f03a';
    btn_my_details.style.color = '#5e5e5e';
    btn_my_details.style.backgroundColor='#ECF0F6';
    remarks_btn.style.color = '#5e5e5e';
    remarks_btn.style.backgroundColor = '#ECF0F6';
    mobileNav.classList.remove('is-active');
    hamburgerMenu.classList.remove('is-active');
}
function mydetailsOpen() {
    dashboard.style.display = 'none';
    appointment.style.display = 'none';
    sms_reminder.style.display = 'none';
    previews.style.display = 'none';
    clients.style.display = 'none';
    my_details.style.display = 'flex';
    remarks_content.style.display = 'none';
    btn_dashboard.style.color = '#5e5e5e';
    btn_dashboard.style.backgroundColor= '#ECF0F6';
    btn_appointment.style.color = '#5e5e5e';
    btn_appointment.style.backgroundColor='#ECF0F6';
    btn_sms_reminder.style.color = '#5e5e5e';
    btn_sms_reminder.style.backgroundColor= '#ECF0F6';
    btn_previews.style.color = '#5e5e5e';
    btn_previews.style.backgroundColor='#ECF0F6';
    btn_clients.style.color = '#5e5e5e';
    btn_clients.style.backgroundColor='#ECF0F6';
    btn_my_details.style.color = '#1064AD';
    btn_my_details.style.backgroundColor='#53a9f03a';
    remarks_btn.style.color = '#5e5e5e';
    remarks_btn.style.backgroundColor = '#ECF0F6';
    mobileNav.classList.remove('is-active');
    hamburgerMenu.classList.remove('is-active');
}
function Remarks() {
    dashboard.style.display = 'none';
    appointment.style.display = 'none';
    sms_reminder.style.display = 'none';
    previews.style.display = 'none';
    clients.style.display = 'none';
    my_details.style.display = 'none';
    remarks_content.style.display = 'flex';
    btn_dashboard.style.color = '#5e5e5e';
    btn_dashboard.style.backgroundColor= '#ECF0F6';
    btn_appointment.style.color = '#5e5e5e';
    btn_appointment.style.backgroundColor='#ECF0F6';
    btn_sms_reminder.style.color = '#5e5e5e';
    btn_sms_reminder.style.backgroundColor= '#ECF0F6';
    btn_previews.style.color = '#5e5e5e';
    btn_previews.style.backgroundColor='#ECF0F6';
    btn_clients.style.color = '#5e5e5e';
    btn_clients.style.backgroundColor='#ECF0F6';
    btn_my_details.style.color = '#5e5e5e';
    btn_my_details.style.backgroundColor='#ECF0F6';
    remarks_btn.style.color = '#1064AD';
    remarks_btn.style.backgroundColor = '#53a9f03a';
    mobileNav.classList.remove('is-active');
    hamburgerMenu.classList.remove('is-active');
}
function editpass() {
    dark_overlay.style.display='block';
    edit_password.style.display='flex';
}
function logout() {
    dark_overlay.style.display='block';
    logout_content.style.display='flex';
}
function completed() {
    dark_overlay.style.display='block';
    completed_content.style.display='flex';
}
function sendreminder() {
    dark_overlay.style.display='block';
    send_reminder_content.style.display='flex';
}
function closeModal() {
    dark_overlay.style.display='none';
    edit_password.style.display='none';
    logout_content.style.display='none';
    completed_content.style.display='none';
    send_reminder_content.style.display='none';
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

// Dropdown Menu
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});

// Hours Popup
let popup = document.getElementById("popup");
let overlay = document.getElementById("dark-overlay");

function openPopup() {
    popup.classList.add("hours-modal-popup");
    overlay.classList.add("dark-overlay-hours-active");
}
function closePopup() {
    popup.classList.remove("hours-modal-popup");
    overlay.classList.remove("dark-overlay-hours-active");
}

let logout_modal = document.getElementById("logout-modal");

function openLogout() {
  logout_modal.classList.add("logout-modal")
}
function closeLogout() {
  logout_modal.classList.add("logout-modal")
}

