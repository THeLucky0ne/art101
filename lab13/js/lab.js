/*
* Author: Jonathan Madriaga
* Created: 25 February
* License: Public Domain
*/




for (i = 1; i <= 200; i ++) {
  if (i % 105 == 0) {
    console.log("FizzBuzzBoom")
  }
  else if (i % 15 == 0) {
    console.log("FizzBuzz")
  }
  else if (i % 21 == 0) {
    console.log("FizzBoom")
  }
  else if (i % 35 == 0) {
    console.log("BuzzBoom")
  }
  else if (i % 3 == 0) {
    console.log("Fizz")
  }
  else if (i % 5 == 0) {
    console.log("Buzz")
  }
  else if (i % 7 == 0) {
    console.log("Boom")
  }
  else {
    console.log(i)
  }
}
