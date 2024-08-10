// Toggle hamburger menu on or off (Mobile)
window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
  });
}

// Login popup after 5 seconds on page load (if openSignup() has been triggered code block stops)
var continueExecution = true;

function fadeIn() {
  if (continueExecution) {
      setTimeout(function() {
          $('#dark-modal-overlay').fadeIn();
      }, 5000);

      setTimeout(function() {
          $('#form').fadeIn();
      }, 4900);
  }
}
document.getElementById('form').addEventListener('click', function() {
continueExecution = false;
});
document.getElementById('form2').addEventListener('click', function() {
continueExecution = false;
});
document.getElementById('create-account-link').addEventListener('click', function() {
continueExecution = false;
})


fadeIn();

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
            selected.setAttribute('value', option.getAttribute('value')); // Set the value attribute
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


//Login popup and Sign-up popup functions
let login = document.getElementById("form");
let signup = document.getElementById("form2");
let verification = document.getElementById("form3");
let overlay = document.getElementById("dark-modal-overlay");
let mobile_nav = document.getElementById("mobile-nav");


function openSignup() {
signup.style.display = "block";
overlay.style.display = "block";
login.style.display = "none";
login.style.visibility = "hidden";

}
function closeSignup() {
signup.style.display = "none";
login.style.display = "none";
overlay.style.display = "none";
}
function openSignin() {
login.style.display = "block";
signup.style.display = "none";
overlay.style.display = "block";
login.style.visibility = "visible";
}
function closeSignin() {
login.style.display = "none";
overlay.style.display = "none";
}
function openVerification() {
signup.style.display = "none";
verification.style.display = "block";
login.style.display = "none";
}
function closeVerification() {
signup.style.display = "flex";
verification.style.display = "none";
}



const nav = document.querySelector(".navigation-bar");
const ham = document.querySelector(".hamburger");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
if (lastScrollY < window.scrollY) {
  nav.classList.add("nav--hidden");
  ham.classList.add("nav--hidden");
} else {
  nav.classList.remove("nav--hidden");
  ham.classList.remove("nav--hidden");
}

lastScrollY = window.scrollY;
});

const faders = document.querySelectorAll('.fade-in');
const fadersd1 = document.querySelectorAll('.fade-in-delay-1');
const fadersd2 = document.querySelectorAll('.fade-in-delay-2');
const fadersd3 = document.querySelectorAll('.fade-in-delay-3');
const sliders = document.querySelectorAll('.slide-in')

const appearOptions = {
threshold: 0,
rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver 
(function(
entries, appearOnScroll
) {
entries.forEach(entry => {
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  }
});
}, 
appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});
fadersd1.forEach(faderd1 => {
appearOnScroll.observe(faderd1);
});
fadersd2.forEach(faderd2 => {
appearOnScroll.observe(faderd2);
});
fadersd3.forEach(faderd3 => {
appearOnScroll.observe(faderd3);
});
sliders.forEach(slider => {
appearOnScroll.observe(slider)
});



class DragScroll {
constructor(obj) {
  this.el = document.querySelector(obj.el);
  this.wrap = document.querySelector(obj.wrap);
  this.items = document.querySelectorAll(obj.item);
  this.bar = document.querySelector(obj.bar);
  this.scrolling = false;
  this.init();
}

init() {
  this.progress = 0;
  this.speed = 0;
  this.oldX = 0;
  this.x = 0;
  this.playrate = 0;

  this.bindings();
  this.events();
  this.calculate();
  this.raf();
}

bindings() {
  ["events", "calculate", "raf", "handleWheel", "move", "handleTouchStart", "handleTouchMove", "handleTouchEnd"].forEach((method) => {
    this[method] = this[method].bind(this);
  });
}

//UPDATE
calculate() {
  this.progress = 0;
  this.wrapWidth = this.items[0].clientWidth * this.items.length;
  this.wrap.style.width = `${this.wrapWidth}px`;

  // Calculate the maximum scroll position considering the last image's visibility
  const lastItemWidth = this.items[this.items.length - 1].clientWidth;
  const sliderWidth = this.el.clientWidth;
  this.maxScroll = this.wrapWidth - sliderWidth + lastItemWidth;

  // Calculate the initial progress to center the images
  const initialProgress = (this.maxScroll - sliderWidth) / 2;
  this.progress = Math.max(0, initialProgress);

  // Ensure that maxScroll is not negative
  this.maxScroll = Math.max(this.maxScroll, 0);

  // Update the progress and move the slider to the initial position
  this.move();
}

handleWheel(e) {
  if (this.scrolling) return;
  this.progress += e.deltaY;
  this.move();
}

handleTouchStart(e) {
  if (!this.isInputTarget(e.target)) {
    e.preventDefault();
  }
  this.dragging = true;
  this.startX = e.clientX || e.touches[0].clientX;
}

handleTouchMove(e) {
  if (!this.dragging || this.isInputTarget(e.target)) return;
  const x = e.clientX || e.touches[0].clientX;
  this.progress += (this.startX - x) * 2.5;
  this.startX = x;
  this.move();
}

handleTouchEnd() {
  this.dragging = false;
}

move() {
  this.progress = Math.min(Math.max(this.progress, 0), this.maxScroll);
}

events() {
  window.addEventListener("resize", this.calculate.bind(this));
  window.addEventListener("wheel", (e) => {
    this.scrolling = true;
    this.handleWheel(e);
  });

  this.el.addEventListener("touchstart", this.handleTouchStart.bind(this));
  window.addEventListener("touchmove", this.handleTouchMove.bind(this));
  window.addEventListener("touchend", this.handleTouchEnd.bind(this));

  window.addEventListener("mousedown", this.handleTouchStart.bind(this));
  window.addEventListener("mousemove", this.handleTouchMove.bind(this));
  window.addEventListener("mouseup", this.handleTouchEnd.bind(this));
  document.body.addEventListener("mouseleave", this.handleTouchEnd.bind(this));
}

raf() {
  this.x = this.lerp(this.x, this.progress, 0.1);
  this.playrate = this.x / this.maxScroll;

  this.wrap.style.transform = `translateX(${-this.x}px)`;
  this.bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;

  this.speed = Math.min(100, this.oldX - this.x);
  this.oldX = this.x;

  this.scale = this.lerp(this.scale, this.speed, 0.1);
  this.items.forEach((item) => {
    item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
    item.querySelector("img").style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`;
  });

  requestAnimationFrame(this.raf.bind(this));
}

lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

isInputTarget(target) {
  return (
    (target.tagName.toLowerCase() === "input" &&
    (target.type === "text" || target.type === "password" || target.type === "number" || target.type === "email" || target.type === "tel" || target.type === "date")) ||
    target.tagName.toLowerCase() === "select"
  );
}


}

const scroll = new DragScroll({
el: ".slider",
wrap: ".slider-wrapper",
item: ".slider-item",
bar: ".slider-progress-bar",
});

scroll.raf();



class DragScroll2 {
constructor(obj) {
  this.el = document.querySelector(obj.el);
  this.wrap = document.querySelector(obj.wrap);
  this.items = document.querySelectorAll(obj.item);
  this.bar = document.querySelector(obj.bar);
  this.scrolling = false;
  this.init();
}

init() {
  this.progress = 0;
  this.speed = 0;
  this.oldX = 0;
  this.x = 0;
  this.playrate = 0;

  this.bindings();
  this.events();
  this.calculate();
  this.raf();
}

bindings() {
  ["events", "calculate", "raf", "handleWheel", "move", "handleTouchStart", "handleTouchMove", "handleTouchEnd"].forEach((method) => {
    this[method] = this[method].bind(this);
  });
}

//UPDATE
calculate() {
  this.progress = 0;
  this.wrapWidth = this.items[0].clientWidth * this.items.length;
  this.wrap.style.width = `${this.wrapWidth}px`;

  // Calculate the maximum scroll position considering the last image's visibility
  const lastItemWidth = this.items[this.items.length - 1].clientWidth;
  const sliderWidth = this.el.clientWidth;
  this.maxScroll = this.wrapWidth - sliderWidth + lastItemWidth;

  // Calculate the initial progress to center the images
  const initialProgress = (this.maxScroll - sliderWidth) / 2;
  this.progress = Math.max(0, initialProgress);

  // Ensure that maxScroll is not negative
  this.maxScroll = Math.max(this.maxScroll, 0);

  // Update the progress and move the slider to the initial position
  this.move();
}

handleWheel(e) {
  if (this.scrolling) return;
  this.progress += e.deltaY;
  this.move();
}

handleTouchStart(e) {
  if (!this.isInputTarget(e.target)) {
    e.preventDefault();
  }
  this.dragging = true;
  this.startX = e.clientX || e.touches[0].clientX;
}

handleTouchMove(e) {
  if (!this.dragging || this.isInputTarget(e.target)) return;
  const x = e.clientX || e.touches[0].clientX;
  this.progress += (this.startX - x) * 2.5;
  this.startX = x;
  this.move();
}

handleTouchEnd() {
  this.dragging = false;
}

move() {
  this.progress = Math.min(Math.max(this.progress, 0), this.maxScroll);
}

events() {
  window.addEventListener("resize", this.calculate.bind(this));
  window.addEventListener("wheel", (e) => {
    this.scrolling = true;
    this.handleWheel(e);
  });

  this.el.addEventListener("touchstart", this.handleTouchStart.bind(this));
  window.addEventListener("touchmove", this.handleTouchMove.bind(this));
  window.addEventListener("touchend", this.handleTouchEnd.bind(this));

  window.addEventListener("mousedown", this.handleTouchStart.bind(this));
  window.addEventListener("mousemove", this.handleTouchMove.bind(this));
  window.addEventListener("mouseup", this.handleTouchEnd.bind(this));
  document.body.addEventListener("mouseleave", this.handleTouchEnd.bind(this));
}

raf() {
  this.x = this.lerp(this.x, this.progress, 0.1);
  this.playrate = this.x / this.maxScroll;

  this.wrap.style.transform = `translateX(${-this.x}px)`;
  this.bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;

  this.speed = Math.min(100, this.oldX - this.x);
  this.oldX = this.x;

  this.scale = this.lerp(this.scale, this.speed, 0.1);
  this.items.forEach((item) => {
    item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
    item.querySelector("img").style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`;
  });

  requestAnimationFrame(this.raf.bind(this));
}

lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

isInputTarget(target) {
  return (
    (target.tagName.toLowerCase() === "input" &&
    (target.type === "text" || target.type === "password" || target.type === "number" || target.type === "email" || target.type === "tel" || target.type === "date")) ||
    target.tagName.toLowerCase() === "select"
  );
}
}


const scroll2 = new DragScroll2({
el: ".slider2",
wrap: ".slider-wrapper2",
item: ".slider-item2",
bar: ".slider-progress-bar2",
});

scroll.raf();


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


let countdown;
let resendTimeout = 60; // 60 seconds

function startCountdown() {
    countdown = setInterval(() => {
        resendTimeout--;
        document.getElementById('countdownTimer').textContent = `Resend in ${resendTimeout} seconds`;
        if (resendTimeout <= 0) {
            clearInterval(countdown);
            document.getElementById('resendButton').disabled = false;
            document.getElementById('countdownTimer').textContent = '';
        }
    }, 1000);
}

async function resendVerification() {
    document.getElementById('resendButton').disabled = true;
    resendTimeout = 60;
    startCountdown();

    try {
        const email = document.getElementById('email').value;
        const response = await fetch(`http://localhost:3000/resendVerification?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            alert('Verification email resent successfully');
        } else {
            const result = await response.json();
            alert('Error resending verification email: ' + result.message);
        }
    } catch (error) {
        console.error(error);
        alert('Error resending verification email');
    }
}

function closeVerification() {
    clearInterval(countdown);
    document.getElementById('countdownTimer').textContent = '';
    document.getElementById('resendButton').disabled = false;
    // Your close verification logic here
}

//New
let imgs1 = document.getElementById("imgs1");
let imgs2 = document.getElementById("imgs2");
let imgs3 = document.getElementById("imgs3");
let imgs4 = document.getElementById("imgs4");
let imgs5 = document.getElementById("imgs5");
let imgs6 = document.getElementById("imgs6");
let imgs7 = document.getElementById("imgs7");
let imgs8 = document.getElementById("imgs8");
let imgs9 = document.getElementById("imgs9");
let imgs10 = document.getElementById("imgs10");

function banda1() {
  imgs1.src = "/images/before-and-after/banda1.png";
}
function banda2() {
  imgs2.src = "/images/before-and-after/banda2.png";
}
function banda3() {
  imgs3.src = "/images/before-and-after/banda3.png";
}
function banda4() {
  imgs4.src = "/images/before-and-after/banda4.png";
}
function banda5() {
  imgs5.src = "/images/before-and-after/banda5.png";
}
function banda6() {
  imgs6.src = "/images/before-and-after/banda6.png";
}
function banda7() {
  imgs7.src = "/images/before-and-after/banda7.png";
}
function banda8() {
  imgs8.src = "/images/before-and-after/banda8.png";
}
function banda9() {
  imgs9.src = "/images/before-and-after/banda9.png";
}
function banda10() {
  imgs10.src = "/images/before-and-after/banda10.png";
}