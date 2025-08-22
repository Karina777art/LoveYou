// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => observer.observe(section));
  
    // Next buttons
    const nextBtns = document.querySelectorAll('.btn-next');
    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const nextId = btn.dataset.next;
        document.querySelector(nextId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Top button
    const topBtn = document.querySelector('.btn-top');
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        document.querySelector('#s1').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });