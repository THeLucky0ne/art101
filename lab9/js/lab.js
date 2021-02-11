/*
* Author: Jonathan Madriaga
* Created: 11 February
* License: Public Domain
*/


var outputEl = document.getElementById("output");
outputEl.innerHTML="I love this class.";
console.log(outputEl);
var new1El = document.createElement("p");
new1El.innerHTML = "I really love this class.";
console.log(new1El);
var new2El = document.createElement("b");
new2El.innerHTML = "I actually hate this class.";
console.log(new2El);
document.appendChild(new1El);
document.appendChild(new2El);
