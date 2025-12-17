const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownContainerEl = document.getElementById('countdown-container');
let minutesValue = parseInt(minutesEl.innerText);
let secondsValue = parseInt(secondsEl.innerText);

// console.log(minutesEl, secondsEl);

let interval = null;

function startCountdown() {
  // console.log(minutesValue, secondsValue);
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
  // console.log(countdownContainerEl);
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
