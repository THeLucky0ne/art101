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
  var textComic = JSON.stringify(comicObj);
  var str = "";
  var image = comicObj.img;
  var title = comicObj.tite;
  var alt = comicObj.alt;
  str += "<h2>" + title + "</h2>";
  str += "<img src='" + image + "' title= '" + alt + "'>"
  putTextOnPage(str);
}

function theFailure(xhr, status, strErr){
  console.log("something went wrong");
}

$("#activate").click(theAjax);
