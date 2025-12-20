// #region OBSERVERS

const cards = Array.from(document.getElementsByClassName('pains__card'));

createObserver(cards);

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

// #endregion

// #region ACCORDION

const accordionItems = document.getElementById('accordion').children;

Array.from(accordionItems).forEach(item => {
  const button = item.querySelector('.accordionItem__button');
  const icon = item.querySelector('.accordionItem__buttonIcon');
  const content = item.querySelector('.accordionItem__content');

  let opened = false;
  content.style.height = '0px';

  button.addEventListener('click', () => {
    if (!opened) {
      const height = content.scrollHeight;
      content.style.height = height + 'px';
      icon.classList.add('closed');
      opened = true;
    } else {
      content.style.height = '0px';
      icon.classList.remove('closed');
      opened = false;
    }
  });
});

// #endregion
