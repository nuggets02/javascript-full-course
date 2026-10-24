function toggleButton(buttonClass) {
  const buttonElement = document.querySelector(buttonClass);

  if (!buttonElement.classList.contains('is-toggled')) {
    turnOffPreviousButton();
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const prevButtonElement = document.querySelector('.is-toggled');
  
  if (prevButtonElement) { 
    prevButtonElement.classList.remove('is-toggled');
  }
}