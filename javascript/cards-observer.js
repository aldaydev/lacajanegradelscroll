const cards = Array.from(document.getElementsByClassName('firstSection__card'));
const stepLines = Array.from(document.getElementsByClassName('step__line'));

// console.log(cards);

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observer.unobserve(entry.target);
//     }
//   })
// }, { threshold: 0.6});

// cards.forEach(card => observer.observe(card));
// stepLines.forEach(stepLine => observer.observe(stepLine));

createObserver(cards);
createObserver(stepLines, 0.2);

function createObserver(elementsArr, threshold = 0.6){

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    })
  }, { threshold: threshold});

  elementsArr.forEach(element => observer.observe(element));
}


