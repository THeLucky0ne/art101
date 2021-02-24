/*
* Author: Jonathan Madriaga
* Created: 25 February
* License: Public Domain
*/



function FuzzyBuzzy(i) {
  for (i = 1; i <= 200; i ++) {
    if (i % 105 == 0) {
      return "FizzBuzzBoom"
    }
    else if (i % 15 == 0) {
      return "FizzBuzz"
    }
    else if (i % 21 == 0) {
      return "FizzBoom"
    }
    else if (i % 35 == 0) {
      return "BuzzBoom"
    }
    else if (i % 3 == 0) {
      return "Fizz"
    }
    else if (i % 5 == 0) {
      return "Buzz"
    }
    else if (i % 7 == 0) {
      return "Boom"
    }
    else {
      return i
    }
  }
  longString += i + "Fizz<br>";
  $("#output").html(longString);
}
