var number1 = parseInt(prompt("Please enter a number:"));
var number2 = parseInt(prompt("Please enter another number:"));

// Add
var add = function(number1, number2) {
  return number1 + number2;
};
var resultA = add(number1,number2);

// Subtract
var subtract = function(number1, number2) {
  return number1 - number2;
};
var resultS = subtract(number1,number2);

// Multiply
var multiply = function(number1, number2) {
  return number1*number2;
};
var resultM = multiply(number1,number2);

// Divide
var divide = function(number1, number2) {
  return number1/number2;
};
var resultD = divide(number1,number2);


alert(resultA);
alert(resultS);
alert(resultM);
alert(resultD);
