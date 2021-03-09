/*
* Author: Jonathan Madriaga
* Created: 8 March
* License: Public Domain
*/


function theAjax() {
   $.ajax({
    url: "https://xkcd.com/476/info.0.json",
    data: {},
    type: "GET",
    dataType: "json",
    success: theSuccess,
    error: theFailure,
    complete: function (xhr, status) {
      console.log("completed");
    }
  });
}

function theSuccess(comicObj){
  console.log(comicObj);
  $("#output").html(comicObj.title);
}

function theFailure()
