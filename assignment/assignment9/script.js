`uisng strict`

function displayAsciiValue(){
    console.log("displaying ascii val");
    let value = document.getElementById("ascii-result"); //button
    var word = document.getElementById("ascii-value").value; //input box
    var thing = 0;
    var items = [];
    let length = word.length;
    for (let z = 0; z < length; z++) {
        
        console.log('The character code ' + word.charCodeAt(thing) + ' is equal to ' + word.charAt(thing));
        
            items.push(word.charCodeAt(thing));  
            console.log(items);
            // return false;

        
         thing ++;
        }

        value.innerHTML = `${items}`;
    }

function displayNumberValue(){
    console.log("displaying num val");
    let sum = document.getElementById("sum-result"); //button
    const number = document.getElementById("number").value; //input box
    let total = 0;
    for (let i = 0; i <= number; i += 2) 
    {
        total += i;
    } 
    sum.innerHTML = `Sum: ${total}`;

}

window.onload=function() {
    let numberbtn= document.getElementById("even-number-btn");
    numberbtn.onclick = this.displayNumberValue;

    let asciibtn= document.getElementById("ascii-value-btn");
    asciibtn.onclick = this.displayAsciiValue;
}