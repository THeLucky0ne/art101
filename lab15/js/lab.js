/*
* Author: Jonathan Madriaga
* Created: 4 March
* License: Public Domain
*/


var thisButton = $("#activate");

$(thisButton).click(function(){
  $.ajax({
    url: "https://numbersapi.com/87",
    data: {
      id: 87,
    },
    type: "GET",
    dataType: "json",
  });
  var divider = document.getElementById("output");
  divider.innerText(data);
});
