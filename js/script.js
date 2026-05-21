/* Portfolio — Pravinda Kassapa | script.js */

document.addEventListener('DOMContentLoaded', () => {

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Contact form — show success message on submit
  const contactForm = document.getElementById('contact-form');
  const formStatus  = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      formStatus.textContent = 'Thank you! Your message has been sent successfully.';
      formStatus.className   = 'form-status success show';

      contactForm.reset();

      setTimeout(() => {
        formStatus.className = 'form-status';
      }, 5000);
    });
  }

  // Mobile menu toggle logic
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isActive = navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');

      // Prevent background scrolling when menu is active
      if (isActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu on screen resize to prevent locked scroll on desktop resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        if (navToggle.classList.contains('active')) {
          navToggle.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  }

});
