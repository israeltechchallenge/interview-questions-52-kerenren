/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(numOne, operator, numTwo) {
  switch (operator) {
    case "+":
      return numOne + numTwo;
    case "-":
      return numOne - numTwo;
    case "*":
      return numOne * numTwo;
    case "/":
      if (numTwo === 0) {
        return "Can't divide by 0!"
      } else {
        return numOne / numTwo;
      }
    default:
      break;
  }
}

exports.solution = calculator;
