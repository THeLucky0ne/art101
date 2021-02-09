var divEl = document.getElementById("div_1");
divEl.innerHTML="This is annoying";
console.log(divEl);
//console.log(divEl.innerHTML);
var button = document.createElement("button");
divEl.appendChild(button);
button.innerHTML = "Plz Press";

button.onclick=function() {
  divEl.innerHTML="this is more annoying than I thought"
}
