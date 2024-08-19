//* file://wsl.localhost/Ubuntu/home/sk-yates/code/ga/labs/dom-events-lab/dom-events-lab/index.html

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstValue = null;
let secondValue = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/

const numbers = document.querySelectorAll('.number');
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
  if(operation === 'add'){
    totalDisplay.innerText = firstValue + secondValue;
  }
  if(operation === 'subtract'){
    totalDisplay.innerText = firstValue - secondValue;
  }
  if(operation === 'multiply'){
    totalDisplay.innerText = firstValue * secondValue;
  }
  if(operation === 'divide'){
    totalDisplay.innerText = firstValue / secondValue;
  }
}

const handleEqualBtnClick = () => {
  secondValue = parseInt(totalDisplay.innerText);
  completeCalculation();
}

const handleOperatorClick = (event) => {
  firstValue = parseInt(totalDisplay.innerText);
  operation = event.target.id;
  totalDisplay.innerText = 0;
}

const clear = () => {
  totalDisplay.innerText = 0;
  firstValue = null;
  secondValue = null;
  operation = null;
}

/*----------------------------- Event Listeners -----------------------------*/

equalsButton.addEventListener('click', handleEqualBtnClick);
clearButton.addEventListener('click', clear);

/* Using forEach to dynamically attach a click event listener to each number button */
numbers.forEach(number => {
  number.addEventListener('click', (event) => {
    totalDisplay.innerText = Number(totalDisplay.innerText + event.target.innerText);
  });
});

/* Using forEach to dynamically attach a click event listener to each operator button */
operationButtons.forEach(operation => {
  operation.addEventListener('click', handleOperatorClick);
})

/* Manually attaching an event listener to each button
plusButton.addEventListener('click', () => {
  operation = 'add'
})
minusButton.addEventListener('click', () => {
  operation = 'subtract'
})
plusButton.addEventListener('click', () => {
  operation = 'multiply'
})
plusButton.addEventListener('click', () => {
  operation = 'divide'
})
*/