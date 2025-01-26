let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousValue = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return; // Prevent setting an operator without input
    if (previousValue !== null) {
        calculate(); // Calculate on consecutive operations
    }
    operator = op;
    previousValue = currentInput;
    currentInput = '';
}

function calculate() {
    if (operator === null || previousValue === null || currentInput === '') return;
    const a = parseFloat(previousValue);
    const b = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    previousValue = null;
    operator = null;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousValue = null;
    display.value = '';
}
