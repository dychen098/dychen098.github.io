"using strict" 
 
fn= "Daniel";
ln= "Chen";
pn= "beach balls";
pc= 5;
pp=3.47;
tax=0.07;
cost=pc*pp;

total= (cost*(1+tax));



const first = document.getElementById("fName");
let last = document.getElementById("lName");
let productName = document.getElementById("pName");
let productCount = document.getElementById("pCount");
let productPrice = document.getElementById("pPrice");
let taxAmount = document.getElementById("tax");
let final = document.getElementById("finally");
let totalAmount = document.getElementById("total");


first.textContent = `First Name: ${fn} `;
last.textContent = ` Last Name: ${ln} `;
productName.textContent = `product Name:  ${pn} `;
productCount.textContent = `product count: ${pc} `;
productPrice.textContent = ` product price: ${pp} `;
taxAmount.textContent = `tax:  ${tax} `;

final.innerHTML=`${fn} ${ln} ordered ${pc} ${pn}`;
totalAmount.innerHTML= `totalling: $${total} `;


