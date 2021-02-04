/*
* Author: Jonathan Madriaga
* Created: 4 February
* License: Public Domain
*/

function fixUserName() {
  var userName = window.prompt("Give me your name so I can give you a better one."); // ask user for name
  console.log("The user's name is: ", userName);
  var nameArray = userName.split('');   // splits string into array
  console.log("nameArray = ", nameArray);
  var nameArraySorter = nameArray.sort();   // sorts array
  console.log("nameArraySorter = ", nameArraySorter);
  var nameSorted = nameArraySorter.join('');   // joins array with string
  console.log("nameSorted = ", nameSorted);

  return nameSorted;
}


document.writeln("I fixed your name and gave you a better one: ", fixUserName(), "</br>");
