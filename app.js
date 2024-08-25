const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

/**
 * Adds event listeners to each button in the `buttons` array.
 * Handles the click event for each button to perform calculator operations.
 */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // Check if the button is an operator
        if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (currentInput) {
                if (operator) {
                    // Evaluate the expression with the previous input, operator, and current input
                    previousInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.textContent = previousInput;
                } else {
                    previousInput = currentInput;
                }
                operator = value;
                currentInput = '';
                display.textContent = `${previousInput} ${operator}`;
            }
        }
        // Check if the button is the equals sign
        else if (value === "=") {
            if (currentInput !== "" && operator !== "" && previousInput !== "") {
                // Evaluate the final expression
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.textContent = currentInput;
                previousInput = "";
                operator = "";
            }
        }
        // Check if the button is the clear button
        else if (value === "C") {
            display.textContent = "0";
            currentInput = "";
            previousInput = "";
            operator = "";
        }
        // Handle number and decimal point inputs
        else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});


// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.getAttribute('data-value');

//         if (value === 'C') {
//             let a = 0;
//             currentInput = '';
//             operator = '';
//             previousInput = '';
//             display.innerText = a;
//         } else if (value === '=') {
//             if (currentInput && previousInput && operator) {
//                 currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
//                 display.textContent = currentInput;
//                 previousInput = '';
//                 operator = '';
//             }
//         } else if (['+', '-', '*', '/'].includes(value)) {
//             if (currentInput) {
//                 if (operator) {
//                     previousInput = eval(`${previousInput} ${operator} ${currentInput}`);
//                     display.textContent = previousInput;
//                 } else {
//                     previousInput = currentInput;
//                 }
//                 operator = value;
//                 currentInput = '';
//             }
//         } else {
//             currentInput += value;
//             display.textContent = currentInput;
//         }
//     });
// });
