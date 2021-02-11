/*
* Author: Jonathan Madriaga
* Created: 11 February
* License: Public Domain
*/


var outputEl = document.getElementById("output");
outputEl.innerHTML="This is annoying";
var new1El = document.createElement("p");
document.body.appendChild(new1El);
new1El.innerHTML = "Plz Press";

new1El.onclick=function() {
  outputEl.innerHTML="this is more annoying than I thought"
}
