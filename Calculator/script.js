let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let operator = '';
let num1 = '';
let num2 = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            display.value = '';
            operator = '';
            num1 = '';
            num2 = '';
            result = '';
        } else if (button.id === 'equals') {
            if (operator && num1 && num2) {
                result = calculate(num1, operator, num2);
                display.value = result;
                operator = '';
                num1 = '';
                num2 = '';
            }
        } else if (button.id === 'divide' || button.id === 'multiply' || button.id === 'subtract' || button.id === 'add') {
            if (num1 && !num2) {
                operator = button.id.replace('divide', '/').replace('multiply', '*').replace('subtract', '-').replace('add', '+');
                display.value += ` ${getOperatorSymbol(operator)}`;
                num1 = display.value.split(getOperatorSymbol(operator))[0];
            }
        } else {
            if (!num1) {
                display.value = button.id.replace('zero', '0').replace('one', '1').replace('two', '2').replace('three', '3').replace('four', '4').replace('five', '5').replace('six', '6').replace('seven', '7').replace('eight', '8').replace('nine', '9').replace('decimal', '.');
                num1 = display.value;
            } else if (num1 && operator) {
                display.value += button.id.replace('zero', '0').replace('one', '1').replace('two', '2').replace('three', '3').replace('four', '4').replace('five', '5').replace('six', '6').replace('seven', '7').replace('eight', '8').replace('nine', '9').replace('decimal', '.');
                num2 = display.value.split(getOperatorSymbol(operator))[1];
            }
        }
    });
});

function calculate(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            if (num2 !== '0') {
                result = parseFloat(num1) / parseFloat(num2);
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operator';
    }
    return result;
}

function getOperatorSymbol(operator) {
    switch (operator) {
        case '+':
            return '+';
        case '-':
            return '-';
        case '*':
            return '×';
        case '/':
            return '÷';
        default:
            return '';
    }
}