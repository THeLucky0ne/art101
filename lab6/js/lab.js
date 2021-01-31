/*
* Author: Jonathan Madriaga
* Created: 2 Febuary
* License: Public Domain
*/


var myTransport = ["car", "walk", "bus"];
var myMainRide ={};
  myMainRide.make = "Nissan";
  myMainRide.model = "Rogue";
  myMainRide.color = "gray";
  myMainRide.year = 2008;

document.writeln("The transportation that I normally use: ", myTransport, "</br>");
document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
