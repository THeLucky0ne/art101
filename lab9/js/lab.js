/*
* Author: Jonathan Madriaga
* Created: 11 February
* License: Public Domain
*/


var outputEl = document.getElementById("output");
outputEl.innerHTML="I love this class.";
var new1El = document.createElement("p");
new1El.innerHTML = "I really love this class.";
var new2El = document.createElement("b");
new2El.innerHTML = "I actually hate this class.";

document.body.appendChild(new1El);
document.body.appendChild(new2El);
