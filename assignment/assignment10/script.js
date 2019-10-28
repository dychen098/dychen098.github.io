`using strict`

var title = [
    ' Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. - oogway', 
    ' Ya wanna know how I got these scars? -the joker ', 
    ' YOU CANT LOSE HOPE WHEN ITS HOPELESS. YOU GOTTA HOPE MORE!"  -philip j fry ', 
    ' Just keep swimming, just keep swimming, just keep swimming, swimming, swimming.  -dory ', 
    ' People Die If They Are Killed - Shirou Emiya '
];

var i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly
    document.getElementById('quotes')
        .innerHTML = title[i++];    // get the item and increment i to move to the next
    if (i == title.length) i = 0;   // reset to first element if you've reached the end
}, 2000);                           // 1000 milliseconds == 1 second


// function quoteChanger() {
//     var quotes = [
//         "quote 1",
//         "quote 2",
//         "quote 3",
//         "quote 4",
//         "quote 5"
//     ];
//     var i = 0;  // the index of the current item to show

//      document.getElementById('quotes')
//         .innerHTML = title[i++];    // get the item and increment i to move to the next
//     if (i == title.length) i = 0;  
// }

// window.onload = function() {

//     this.setInterval(quoteChanger,2000); //time interval of 2 second

// }


function lotteryNumber() {
    console.log("working")
    let result = document.getElementById("number-result"); //button
    var wins = []; //rand num gen array
    
    const number1 = document.getElementById("number1").value; //input box
    const number2 = document.getElementById("number2").value; //input box
    const number3 = document.getElementById("number3").value; //input box
    const number4 = document.getElementById("number4").value; //input box
    const number5 = document.getElementById("number5").value; //input box
    var selected = [number1,number2,number3,number4,number5]; //user input array
    console.log(selected);


    for (let i = 0; i <= 4; i ++) 
    {
        wins.push(Math.floor((Math.random() * 10) + 1)); //adds each random number to array
        console.log(wins);
    }
    result.innerHTML= `${wins}`


   
    if (selected[0] == wins[0]){
        const errorSpan = document.createElement("span");
        errorSpan.innerHTML= "match ";
        this.after(errorSpan);
    } else {
        const errorSpan1 = document.createElement("span");
        errorSpan1.innerHTML= "no  ";
        this.after(errorSpan1);
    } //-----------------------------------------
    if (selected[1] == wins[1]){
        const errorSpan2 = document.createElement("span");
        errorSpan2.innerHTML= "match, ";
        this.after(errorSpan2);
    } else {
        const errorSpan3 = document.createElement("span");
        errorSpan3.innerHTML= "no , ";
        this.after(errorSpan3);
    }//----------------------------------------
    if (selected[2] == wins[2]){
        const errorSpan4 = document.createElement("span");
        errorSpan4.innerHTML= "match, ";
        this.after(errorSpan4);
    } else {
        const errorSpan5 = document.createElement("span");
        errorSpan5.innerHTML= "no , ";
        this.after(errorSpan5);
    } //-----------------------------------------
    if (selected[3] == wins[3]){
        const errorSpan6 = document.createElement("span");
        errorSpan6.innerHTML= "match, ";
        this.after(errorSpan6);
    } else {
        const errorSpan7 = document.createElement("span");
        errorSpan7.innerHTML= "no , ";
        this.after(errorSpan7);
    }//----------------------------------------
    if (selected[4] == wins[4]){
        const errorSpan8 = document.createElement("span");
        errorSpan8.innerHTML= "match, ";
        this.after(errorSpan8);
    } else {
        const errorSpan9 = document.createElement("span");
        errorSpan9.innerHTML= "no  ";
        this.after(errorSpan9);
    }
    
    if((selected[0] == wins[0]) && (selected[1] == wins[1]) && (selected[2] == wins[2]) 
    && (selected[3] == wins[3]) && (selected[4] == wins[4])) { 
        const luck = document.getElementById("lottery-result");
        luck.innerHTML = "congratz you won";
    } else {
        const luck = document.getElementById("lottery-result");
        luck.innerHTML = "welp you failed"
    }
}

window.onload = function() {

    let lottobtn= document.getElementById("lottery-btn");
    lottobtn.onclick = this.lotteryNumber;

}