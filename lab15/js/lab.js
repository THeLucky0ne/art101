/*
* Author: Jonathan Madriaga
* Created: 4 March
* License: Public Domain
*/


var thisButton = $("#activate");

$(thisButton).click(function(){
  $.get("https://numbersapi.com/87", function(data){
    alert("Data: " + data);
  });
  //$.ajax({
    //url: "https://numbersapi.com/87",
    //type: "GET",
    //dataType: "json",
  //});
  var divider = document.getElementById("output");
  divider.innerText(data);
});
