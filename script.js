// Burger toggle
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// Form script
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();
  const feedback = document.getElementById('form-message');

  if (name && email && message) {
    feedback.textContent = `Thanks, ${name}! Your message has been sent.`;
    feedback.style.color = 'green';
    feedback.style.display = 'block';
    this.reset();
  } else {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = 'red';
    feedback.style.display = 'block';
  }
});
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('nav ul');
const body = document.body;

burger.addEventListener('click', () => {
navMenu.classList.toggle('active');
body.classList.toggle('menu-open');
});
