`uisng strict`

function displayCount(){

    ulElem = document.createElement("ul");
    contentElem = document.getElementById("content");
    contentElem.append(ulElem);

    let count = 1;

    while(count<=10){
        liElem=document.createElement("li");
        liElem.innerText= count;
        ulElem.append(liElem);
        console.log(`${count}`);
        count++;
    }
}

function displayLinks(){
    let linksElem = document.getElementById("links");

    for(let i=1; i<=5; i++){
        aElem =document.createElement("a");
        linksElem.append(aElem);
        
        linksElem.innerHTML = `Page${i}`;
        linksElem.href=`#${i}`;
        console.log(i);
    }

}

function displayTimesTable(){
    let tableElem = document.createElement("table");
    //how to style----
    style=  tableElem.id = "asdf";
    //----
    this.after(tableElem);
    //rows
    for(let row=1; row<=10; row++){
        let tableRow = document.createElement("tr");
        tableElem.append(tableRow);
        //cols
        for(let col=1; col<=10;col++){
            let tableCol = document.createElement("td");
            tableElem.append(tableCol);
            tableCol.innerHTML = row*col;
        }


    }
}

window.onload=function() {
    this.displayCount();
    this.displayLinks();

    let multBtn= document.getElementById("mult-btn");
    multBtn.onclick = this.displayTimesTable;
}