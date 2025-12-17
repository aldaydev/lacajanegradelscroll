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
