/*
* Author: Jonathan Madriaga
* Created: 23 February
* License: Public Domain
*/



function sortingHat(name){
  var length = name.length;
  var mod = length % 4;
  if (mod == 0) {
    return "Gryffindor";
  }
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}


var theButton = document.getElementById("button");
theButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var text = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerText =  text;
})
