let display = document.getElementById("display");

// Append a number to the display
function appendNumber(number) {
  display.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
  if (display.value !== "" && !isOperator(display.value.slice(-1))) {
    display.value += operator;
  }
}

// Check if the last character is an operator
function isOperator(character) {
  return ['+', '-', '*', '/'].includes(character);
}

// Clear the display
function clearScreen() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate and display the result
function calculateResult() {
  try {
    // Use a safer way to evaluate the expression
    let result = Function('"use strict";return (' + display.value + ')')();
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
