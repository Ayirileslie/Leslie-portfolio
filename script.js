document.addEventListener('DOMContentLoaded', () => {
  // Burger toggle
  const burger = document.querySelector('.burger') || document.getElementById('burger');
  const navMenu = document.querySelector('nav ul') || document.getElementById('nav-links');
  const body = document.body;

  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('active'); // Use .active for nav menu
      body.classList.toggle('menu-open');
    });
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('form-message');

  if (contactForm && feedback) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('input[type="text"]').value.trim();
      const email = this.querySelector('input[type="email"]').value.trim();
      const message = this.querySelector('textarea').value.trim();

      if (name && email && message) {
        feedback.textContent = `Thanks, ${name}! Your message has been sent.`;
        feedback.style.color = 'green';
        feedback.style.display = 'block';
        this.reset();
      } else {
        feedback.textContent = 'Please fill in all fields.';
        feedback.style.color = 'red';
        feedback.style.display = 'block';
      }
    });
  }
});
