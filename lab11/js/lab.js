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
  $("#challenge").append("<p>The purpose of this lab is to experiment with jQuery
    by using buttons to display our paragraphs. </p>");
});

$(problemsButton).click(function(){
  $("#problems").append("<p> One issue that I experienced during this lab was
  gettig adjusted with the specific syntax jQuery has.
  With Weschool's help, I was able to figure out
  the syntax that would help me in this lab. </p>")
});

$(resultsButton).click(function(){
  $("#results").append("<p>There should be three buttons under each section.
    Clicking on them should display their respective
    paragraphs.</p>")
});
