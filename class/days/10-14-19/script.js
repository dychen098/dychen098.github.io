`using strict`

function foods(){
    console.log("working");
    let foodPs = document.getElementsByClassName("food");
    
    //Let foodPs = document.getElementsByTagName(“p”);
    
    let pElem = document.createElement("p");
    this.after(pElem);
    pElem.innerHTML= "I like";
    for (let foodElem of foodPs){
        pElem.innerHTML+=foodELem.InnerHTML;
    }
}
    
    
function randomFood(){
    console.log("ran");
    let num =Math.floor(Math.random()*10+1);
    this.after(num);
}   


// function showFoods(){
//     console.log("showq");
//     // let btnfood = document.getElementById("");
// 	let ulElem = document.createElement("ul");
// 	this.after(ulElem);

// 	for(let item of foods){
// 	    let li = document.createElement("li") 
// 	    li.innerHTML = item;
// 	}
// }
 

window.onload = function(){
	let foodBtn = document.getElementById("food-btn");
	foodBtn.onclick = foods; 
	let somerandomfood = document.getElementById("random-food-btn");
    somerandomfood.onclick= randomFood; 
    let showingfood = document.getElementById("show-food-btn");
	showingfood.onclick= showFoods; 
}
