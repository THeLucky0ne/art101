/*
* Author: Jonathan Madriaga
* Created: 11 February
* License: Public Domain
*/


var outputEl = document.getElementById("output");
outputEl.innerHTML="I love this class.";
console.log(outputEl);
var new1El = document.createElement("firstchange");
new1El.innerHTML = "I really love this class.";
console.log(new1El);
var new2El = document.createElement("secondchange");
new2El.innerHTML = "I actually hate this class.";
console.log(new2El);

document.body.appendChild(new1El);
document.body.appendChild(new2El);
