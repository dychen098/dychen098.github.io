
function highlightCell(event){
    let callerName= event.target.tagName;

    //for anuthing other than a table cell get out
    if(callerName.toLowerCase() != "td") return;

    //highlight cell
    event.target.classList.add("highlight");

}

function unHighlightCell(event){
    let callerName= event.target.tagName;
    
    //for anuthing other than a table cell get out
    if(callerName.toLowerCase() != "td") return;
    
    //highlight cell
    event.target.classList.remove("highlight");
        
}

function showAnimals(){
    let animalTDs= document.querySelectorAll("#animal-table td");
    //querySelectionAll makes an array
    let p = document.createElement("p");
    this.after(p);
    for(let animalTD of animalTDs) {
        p.innerHTML+=animalTD.innerHTML + ", ";
    }
}

function stylePara(){
    let p = document.querySelector(".special");
    p.classList.toggle("highlight");

}

window.onload = function() {
    this.document.getElementById("animal-table").addEventListener("mouseover", highlightCell);
    this.document.getElementById("animal-table").addEventListener("onmouseout", unHighlightCell);
    this.document.getElementById("btn-show").addEventListener("click", showAnimals);
    this.document.getElementById("btn-style").addEventListener("click", stylePara);
    this.setInterval(stylePara,1000); //time interval of 1 second
}


