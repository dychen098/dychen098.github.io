"using strict" 
// ctrl + / comments out a line
//  const userName = prompt("enter name");
 
//  alert ("hi "+ userName);


 name = prompt("enter your name");
 coffee = prompt("enter the amount of coffee orders you would like");
 tip = prompt("enter the amount you would like to tip, please enter in terms of dollars");

 price=1.50;
 tax=1.07;
 coc = price*coffee;
 total=(coc*tax)+1*tip;

let amountP = document.getElementById("amount");
amountP.innerHTML = ` ${name} ordered ${coffee} coffees. you kindly tipped $${tip}, the total is $${total}`;




