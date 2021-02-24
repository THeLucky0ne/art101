/*
* Author: Jonathan Madriaga
* Created: 25 February
* License: Public Domain
*/


var longString = num;
  for (num = 1; num <= 200; num ++) {
    if (num % 105 == 0) {
      console.log("FizzBuzzBoom");
      longString += num + ":FizzBuzzBoom<br>";
    }
    else if (num % 15 == 0) {
      console.log("FizzBuzz");
      longString += num + ":FizzBuzz<br>";
    }
    else if (num % 21 == 0) {
      console.log("FizzBoom");
      longString += num + ":FizzBoom<br>";
    }
    else if (num % 35 == 0) {
      console.log("BuzzBoom");
      longString += num + ":BuzzBoom<br>";
    }
    else if (num % 3 == 0) {
      console.log("Fizz");
      longString += num + ":Fizz<br>";
    }
    else if (num % 5 == 0) {
      console.log("Buzz");
      longString += num + ":Buzz<br>";
    }
    else if (num % 7 == 0) {
      console.log("Boom");
      longString += num + ":Boom<br>";
    }
    else {
      return num;
      longString += num + "<br>";
    }
  };

  $("#output").html(longString);
