const cards = Array.from(document.getElementsByClassName('firstSection__card'));

console.log(cards);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  })
}, { threshold: 0.6});

cards.forEach(card => observer.observe(card));

