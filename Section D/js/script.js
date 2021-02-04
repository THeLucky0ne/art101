//console.log("javascript loaded");
var nameVar = "Jonathan";
var numVar = 5;
//console.log(numVar);
numVar = 25;
//console.log(numVar);

function myfirstFunction (){
  console.log("this is my first function");
}
//myfirstFunction();

function comparingNumbers(firstNum, secondNum){
  console.log("First Number: "+firstNum+" second Number: "+secondNum);
  console.log("First number is greater than second number "+ (firstNum>secondNum));
  console.log(firstNum);
  firstNum = 11;
  secondNum = 12;
  console.log("First Number: "+firstNum+" second Number: "+secondNum);
  console.log("First number is greater than second number "+ (firstNum>secondNum));
  numVar = numVar + 3
}
comparingNumbers(2,1);
numVar = numVar + 40
comparingNumbers(12,18);
//console.log(firstNum);


function userInfo(firstname, lastname){
  console.log("My first name is "+firstname+"and my last name is "+lastname);
}

console.log(userinfo(Michael, Jackson));
