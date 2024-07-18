// Get the screen elements
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

// Initialize the current operation
let currentOperation = '0';

// Handle button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === '=') {
            // Evaluate the expression
            try {
                currentOperation = eval(currentOperation).toString();
            } catch (error) {
                currentOperation = 'Error';
            }
        } else {
            // Update the current operation
            currentOperation = currentOperation === '0' ? buttonText : currentOperation + buttonText;
        }

        // Update the screen
        currentOperationScreen.textContent = currentOperation;
    });
});
