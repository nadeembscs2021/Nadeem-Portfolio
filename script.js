// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 50);
});

// Typing Text Animations (Using Typed.js)
document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typing", {
        strings: ["Programmer", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Toggle Navigation Menu for Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });

        // Close menu on mobile after clicking
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// 

// Fade-in Animation on Scroll
const faders = document.querySelectorAll('.reveal');

const appearOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -100px 0px',
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});


 // Scroll-to-top button functionality
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
 window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100) {
     scrollToTopBtn.classList.add("active");
   } else {
     scrollToTopBtn.classList.remove("active");
   }
 });

 scrollToTopBtn.addEventListener("click", () => {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 });
