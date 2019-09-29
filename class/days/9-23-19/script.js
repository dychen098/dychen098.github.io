"using strict"

function showGiftMessage(){
    console.log("showing my gift");
     // grabs the presents
     const final = document.getElementById("final");
    const present = document.getElementById("present").value;
    //present = present.toLowerCase().trim();
    if(present == "doll"){
        final.innerHTML = "fine";
    }else if (present == "ball") {
        final.innerHTML = "no im broke";
    }else{
        final.innerHTML= "sure";
    }
    // if(present == "french"){
    //     final.innerHTML= "Bonjour le monde";
    //     console.log("displaying french");
    // } else if (present == "spanish") {
    //     final.innerHTML= "Hola Mundo";
    //     console.log("displaying spanish");
    // } else if (present == "german") {
    //     final.innerHTML = "Hallo Welt" ;
    //     console.log("displaying german");
    // } else if (present == "chinese") {
    //     final.innerHTML = "你好，世界";
    //     console.log("displaying chinese");
    //  } else {
    //     final.innerHTML= "unsure";
    //     console.log("other");
    // }
}

    // switch(present){
    //     case "doll":
    //         final.innerHTML = "gotcha";
    //         break;
    //     case "ball":
    //         final.innerHTML = "sure";
    //         break;
    //     case "dog":
    //         final.innerHTML = "alright";
    //         break;
    //     case "bag":
    //         final.innerHTML = "waht";
    //         break;
    //     default:
    //         final.innerHTML= "<strong> i love it </strong>";
    // }

// }

//makes sure all html and css is loaded to the page first
window.onload = function(){
    const btnResult = document.getElementById("btn-results");
    btnResult.onclick= this.showGiftMessage;
}
