/*
* Author: Jonathan Madriaga
* Created: 23 February
* License: Public Domain
*/



function sortingHat(str){
  var length = str.length;
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


//str = document.getElementById("input")
var theButton = document.getElementById("button");
theButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  document.getElementById("output").innerHTML = "<p>The Sorting Hat has
  sorted you into " + house + "</p>";
})
