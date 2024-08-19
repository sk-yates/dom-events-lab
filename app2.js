
//? Link to DOM Events Lab - Web browser calculator
//* file://wsl.localhost/Ubuntu/home/sk-yates/code/ga/labs/dom-events-lab/dom-events-lab/index.html

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstValue = null;
let secondValue = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/

const numberButtons = document.querySelectorAll('.number'); 
const operationButtons = document.querySelectorAll('.operator');

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let totalDisplay = document.querySelector('.display');
totalDisplay.innerText = 0;

/*-------------------------------- Functions --------------------------------*/

const completeCalculation = () => {
    let total;
    switch (operation) {
      case 'add':
        total = firstValue + secondValue;
        break;
      case 'subtract':
        total = firstValue - secondValue;
        break;
      case 'multiply':
        total = firstValue * secondValue;
        break;
      case 'divide':
        total = firstValue / secondValue;
        break;
    }
    totalDisplay.innerText = total;
}
// Using switch statement allows for the function to run a particular line of logic depending on the operator identified in the "case". 

const handleEqualBtnClick = () => {
  secondValue = parseInt(totalDisplay.innerText);
  completeCalculation();
}

const handleOperatorClick = (event) => {
  firstValue = parseInt(totalDisplay.innerText);
  operation = event.target.id;
  totalDisplay.innerText = secondValue; 
  // Setting this value to "secondValue" makes the calculator hold the second clicked value prior to the "=" being clicked. 
}

const clear = () => {
  firstValue = null;
  secondValue = null;
  operation = null;
  totalDisplay.innerText = 0;
}

/*----------------------------- Event Listeners -----------------------------*/

equalsButton.addEventListener('click', handleEqualBtnClick);
clearButton.addEventListener('click', clear);

/* Using forEach to dynamically attach a click event listener to each number button */
numberButtons.forEach(number => {
  number.addEventListener('click', (event) => {
    totalDisplay.innerText = Number(totalDisplay.innerText + event.target.innerText);
  });
});


/* Using forEach to dynamically attach a click event listener to each operator button */
operationButtons.forEach(operation => {
  operation.addEventListener('click', handleOperatorClick);
})
