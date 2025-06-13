const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstValue = '';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
      if (value === 'AC') {
      currentInput = '';
      operator = '';
      firstValue = '';
      display.value = '';
    } else if (['+', '-', '×', '÷'].includes(value)) {
      operator = value;
      firstValue = currentInput;
      currentInput = '';
    } else if (value === '=') {
      if (firstValue && operator && currentInput) {
        let expression = `${firstValue}${operator}${currentInput}`;
        expression = expression.replace('×', '*').replace('÷', '/');
        const result = eval(expression);
        display.value = result;
        currentInput = result;
        firstValue = '';
        operator = '';
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
