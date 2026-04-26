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

});
