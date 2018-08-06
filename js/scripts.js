
$(function() {
$("#buttonCal").click(function(event) {
  event.preventDefault();
  var originalExp = $("#form").val();
  var splitArray = originalExp.split("");
  var number1 = parseInt(splitArray[0]);
  var number2 = parseInt(splitArray[2]);
  var operator = splitArray[1];

  if (operator === "+") {
    var add = function(number1, number2) {
    var result = number1 + number2;
    return result;
    };
    // alert(add(number1, number2));
    $("#result").val(add(number1, number2));
  }

  else if (operator === "-") {
    var subtract = function(number1, number2) {
      var result = number1 - number2;
      return result;
    };
      $("#result").val(subtract(number1, number2));
  }

  else if (operator === "/") {
    var division = function(number1, number2) {
    var result = number1 / number2;
    return result;
    };
      $("#result").val(division(number1, number2));
  }

  else {
    var multiply= function(number1, number2) {
    var result = number1 * number2;
    return result;
    };
      $("#result").val(multiply(number1, number2));
  }

})

})
