/*
* Author: Jonathan Madriaga
* Created: 18 February
* License: Public Domain
*/


var challengeButton = $("#challenge");
var problemsButton = $("#problems");
var resultsButton = $("#results");

$(challengeButton).append("<button>Click to show the challenge</button>");
$(problemsButton).append("<button>Click to show the problems</button>");
$(resultsButton).append("<button>Click to show the results</button>");


$(challengeButton).click(function(){
  $("#challenge").toggleClass("special");
});

$(problemsButton).click(function(){
  $("#problems").toggleClass("special");
});

$(resultsButton).click(function(){
  $("#results").toggleClass("special");
});

$("#challenge").addClass("special");
$("#problems").addClass("special");
$("#results").addClass("special");
