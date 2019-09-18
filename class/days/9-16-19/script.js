"using strict" 
// ctrl + / comments out a line
//  const userName = prompt("enter name");
 
//  alert ("hi "+ userName);


userName = prompt("enter name of first cate");
userName2 = prompt("enter name of second cat");

let resultP = document.getElementById("result");
resultP.innerHTML = `cates names are ${userName } and ${userName2}`;





const item1Li = document.getElementById("item1");
const item2Li = document.getElementById("item2");
const item3Li = document.getElementById("item3");

item1Li.innerHTML = "penguins";
item2Li.innerHTML = "moose";
item3Li.innerHTML = "deer";

