// import './javascript/cards-observer.js';
// import './javascript/countdown.js';
// import './javascript/accordion.js';

// #region OBSERVERS

const cards = Array.from(document.getElementsByClassName('firstSection__card'));
const stepLines = Array.from(document.getElementsByClassName('step__line'));

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

// #endregion

// #region ACCORDION

const accordionItems = document.getElementById('accordion').children;

function selectElements(){
  Array.from(accordionItems).forEach(element => {
    const button = element.querySelector('.accordionItem__button');
    const icon = element.querySelector('.accordionItem__buttonIcon');
    const content = element.querySelector('.accordionItem__content');
    handleHeight(button, content, icon);
  });
}

selectElements();

function handleHeight(button, content, icon) {
  let opened = false;
  const calculatedHeight = content.scrollHeight;
  content.style.height = '0px';
  icon.classList.remove('closed');

  button.addEventListener('click', () => {
    if (!opened) {
      content.style.height = calculatedHeight + 'px';
      icon.classList.add('closed');
      opened = true;
    } else {
      content.style.height = '0px';
      icon.classList.remove('closed');
      opened = false;
    }
  });
};

window.addEventListener('resize', () => {
  selectElements();
})

// #endregion

// #region COUNTDOWN

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownContainerEl = document.getElementById('countdown-container');
let minutesValue = parseInt(minutesEl.innerText);
let secondsValue = parseInt(secondsEl.innerText);

let interval = null;

function startCountdown() {
  interval = setInterval(() => {
    if(secondsValue === 0) {
      if(minutesValue !== 0) secondsValue = 60;
      secondsEl.innerText = secondsValue;
      if(minutesValue === 0) return stopCountdown();
      minutesValue--;
      minutesEl.innerText = formated(minutesValue);
    }
    secondsValue--;
    secondsEl.innerText = formated(secondsValue);
  }, 1000);
};

startCountdown();

function stopCountdown() {
  clearInterval(interval);
  interval = null;
  secondsValue = formated(0);
  secondsEl.innerText = secondsValue;
  minutesValue = formated(0);
  countdownContainerEl.classList.add('stopped');
};

function formated(number) {
  let format2 = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  return format2.format(number);
}

// #endregion
