const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const mathSign = document.querySelector('mathSign');
const numberButton = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const calculatorHistory = document.querySelector('.history');
const historyBtn =  document.querySelector('.historyBtn');

let result = '';




















// Nasłuchiwanie przycisków

operatorButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);