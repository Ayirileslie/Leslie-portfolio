document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
  
    if (name && email && message) {
      alert(`Thanks, ${name}! Your message has been sent.`);
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  
  
  