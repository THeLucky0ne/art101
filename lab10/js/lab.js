/*
* Author: Jonathan Madriaga
* Created: 11 February
* License: Public Domain
*/


var button = document.getElementById("my-button");

button.addEventListener("click", function(){

  var name = document.getElementById("user-name");
  var userName = name.value;

  userName = userName.toLowerCase().split('').sort().reverse().join('');

  console.log("Your name", userName);
  var outputEl = document.getElementsById("output");
  outputEl.innerHTML = userName;

});
