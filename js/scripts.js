
$(function() {
var originalExp = document.getElementById("form").innerHTML;
// var originalExp = prompt("enter...");

$("#buttonCal").click(function() {
  alert(originalExp);
  var splitArray = originalExp.split("");
  var number1 = parseInt(splitArray[0]);
  var number2 = parseInt(splitArray[2]);
  var operator = splitArray[1];

  if (operator === "+") {
    var add = function(number1, number2) {
    var result = number1 + number2;
    return result;
    };
    alert(add(number1, number2));
  }

  else if (operator === "-") {
    var subtract = function(number1, number2) {
      var result = number1 - number2;
      return result;
    };
      alert(subtract(number1, number2));
  }

  else if (operator === "/") {
    var division = function(number1, number2) {
    var result = number1 / number2;
    return result;
    };
      alert(division(number1, number2));
  }

  else {
    var multiply= function(number1, number2) {
    var result = number1 * number2;
    return result;
    };
      alert(multiply(number1, number2));
  }

})

})
