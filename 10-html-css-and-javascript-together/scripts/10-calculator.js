let calculation = localStorage.getItem('calculation') || '';
let calculationDone = false;

displayCalculation(calculation);

function updateCalculation(value) {
  if (calculationDone) {

    if (!isNaN(value) || value === '.') {
      calculation = value;
      calculationDone = false;
      saveToLocalStorage(calculation);
      displayCalculation(calculation);
      return;
    }
    
    calculationDone = false;
  }

  calculation += value;

  saveToLocalStorage(calculation);
  displayCalculation(calculation);
}

function saveToLocalStorage(calculation) {
  localStorage.setItem('calculation', calculation)
}

function displayCalculation(calculation) {
  document.querySelector('.js-display')
    .textContent = String(calculation);
}