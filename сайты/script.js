// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Fake submit
  document.querySelector('.feedback').addEventListener('submit', e => {
    e.preventDefault();
    alert('Request sent! We will contact you soon.');
  });