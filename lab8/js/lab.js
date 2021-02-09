/*
* Author: Jonathan Madriaga
* Created: 9 February
* License: Public Domain
*/


function firstThing(test) {
  console.log(test + "This is the first function");
}
function secondThing(test) {
  console.log(test + "This is the second function");
}
function thirdThing(test) {
  console.log(test + "This is the third function");
}

// first test

firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// second test

setTimeout(function() {
  firstThing("TEST 2");
}, 0)

setTimeout(function() {
  secondThing("TEST 2");
}, 0)

setTimeout(function() {
  thirdThing("TEST 2");
}, 0)

// third test

setTimeout(function() {
  firstThing("TEST 3");
}, 5000)

setTimeout(function() {
  secondThing("TEST 3");
}, 3000)

setTimeout(function() {
  thirdThing("TEST 3");
}, 4000)
