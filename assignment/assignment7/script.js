"using strict" 

function compareAges(){
    console.log("comparing ages");
    let firstName = document.getElementById("txt-first-name").value;
    let secondName = document.getElementById("txt-second-name").value;
    let thirdName = document.getElementById("txt-third-name").value;
    let firstAge = document.getElementById("txt-first-age").value;
    let secondAge = document.getElementById("txt-second-age").value;
    let thirdAge = document.getElementById("txt-third-age").value;  
    let compare = document.getElementById("age-compare");


    if((firstAge > secondAge) && (firstAge > thirdAge) && (secondAge > thirdAge)) {
        compare.innerHTML = `oldest to youngest: ${firstName}, ${secondName}, ${thirdName}`
        console.log("1,2,3");
    } else if ((firstAge > thirdAge) && (firstAge > secondAge) && (secondAge < thirdAge)) {
        compare.innerHTML = `oldest to youngest: ${firstName}, ${thirdName}, ${secondName}`
        console.log("1,3,2");
    } else if ((secondAge > firstAge) &&(secondAge> thirdAge) && (firstAge> thirdAge)) {
        compare.innerHTML = `oldest to youngest: ${secondName}, ${firstName}, ${thirdName}`
        console.log("2,1,3");
    } else if ((secondAge > thirdAge)&& (secondAge> firstAge) && (firstAge < thirdAge)) {
        compare.innerHTML = `oldest to youngest: ${secondName}, ${thirdName}, ${firstName}`
        console.log("2,3,1");
    } else if ((thirdAge > firstAge) && (thirdAge> secondAge) && (firstAge> secondAge)) {
        compare.innerHTML = `oldest to youngest: ${thirdName}, ${firstName}, ${secondName}`
        console.log("3,1,2");
    } else if ((thirdAge > secondAge) && (thirdAge> firstAge) && (firstAge < secondAge)) {
        compare.innerHTML = `oldest to youngest: ${thirdName}, ${secondName}, ${firstName}`
        console.log("3,2,1");
    } else {
        console.log("broken");
    }
}

function displayHello(){
    console.log("displaying hello");
    const hello = document.getElementById("hello-result");
    const language = document.getElementById("language").value;
    // lang = lang.toLowerCase();
    // lang = lang.trim();
    if(language == "french"){
        hello.innerHTML= "Bonjour le monde";
        console.log("displaying french");
    } else if (language == "spanish") {
        hello.innerHTML= "Hola Mundo";
        console.log("displaying spanish");
    } else if (language == "german") {
        hello.innerHTML = "Hallo Welt" ;
        console.log("displaying german");
    } else if (language == "chinese") {
        hello.innerHTML = "Nǐ hǎo, shìjiè";
        console.log("displaying chinese");
     } else {
        hello.innerHTML= "unsure";
        console.log("other");
    }


}

function pluralize(){
    console.log("making plural");
    const plural = document.getElementById("pluralize-final");
    let itemName = document.getElementById("item-name").value;
    let itemNum =document.getElementById("item-number").value;

    if(itemNum > 1) {
        plural.innerHTML = `you ordered ${itemNum} ${itemName}s`;
        console.log(">1");
    } else if (itemNum < 0){
        plural.innerHTML = "error";
        console.log("0");
     } else {
         plural.innerHTML = `you ordered ${itemNum} ${itemName}`;
         console.log("other");
     }
}

window.onload = function(){
    const ageResult = document.getElementById("age-results");
    ageResult.onclick= this.compareAges;

    const helloResult = document.getElementById("language-results");
    helloResult.onclick= displayHello;
    
    const pluralResult = document.getElementById("pluralize-results");
    pluralResult.onclick= this.pluralize;
}