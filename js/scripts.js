$(function() {
  $("#buttonCal").click(function(event) {
          event.preventDefault();
          var originalExp = $("#form").val();
          var splitArray = originalExp.split("");
          var i;
          var j;
          var k;
          var number1 = "";
          var number2 = "";
          var number1Concat = "";
          var number2Concat = "";
          for (i = 0; i < splitArray.length; i++) {

              if (splitArray[i] == "+" || "-" || "/" || "*") {
                  var operator = splitArray[i];
                  var number1Array = splitArray.slice(0, i - 1);
                  for (j = 0; j < number1Array.length; j++) {
                      number1Concat += number1Array[j];
                  }
                  var number1 = parseFloat(number1Concat);
              }
              // console.log(number1);

              if (splitArray[i] == "+" || "-" || "/" || "*") {

                  var number2Array = splitArray.slice(i+1, splitArray.length-1);
                  console.log(number2Array.length);
                  for (k = 0; k < number2Array.length; k++) {
                      number2Concat += number2Array[k];
                  }
                  var number2 = parseFloat(number2Concat);
              }
              // console.log(number2);

              // else {alert("Please enter a valid expression!")}
              // var number1 = parseInt(splitArray[0]);
              // var number2 = parseInt(splitArray[2]);
              // var operator = splitArray[1];
          }
              if (operator === "+") {
                  var add = function(number1, number2) {
                      var result = number1 + number2;
                      return result;
                  };
                  // alert(add(number1, number2));
                  $("#result").val(add(number1, number2));
              } else if (operator === "-") {
                  var subtract = function(number1, number2) {
                      var result = number1 - number2;
                      return result;
                  };
                  $("#result").val(subtract(number1, number2));
              } else if (operator === "/") {
                  var division = function(number1, number2) {
                      var result = number1 / number2;
                      return result;
                  };
                  $("#result").val(division(number1, number2));
              } else {
                  var multiply = function(number1, number2) {
                      var result = number1 * number2;
                      return result;
                  };
                  $("#result").val(multiply(number1, number2));
              }

          })

  })
