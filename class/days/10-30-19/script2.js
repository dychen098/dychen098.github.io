async function displaybreweriess(){
    let response = await fetch("https://api.openbrewerydb.org/breweries");
    let breweriesJson = await response.json();
    let contentDiv = document.getElementById("content");

    //loop through breweriess array
    for(i in breweriesJson){
        let breweries = breweriesJson[i];
        contentDiv.append(getbreweriesItem(breweries));
    }
}

function getbreweriesItem(breweries){
    let breweriesSection = document.createElement("section");
    breweriesSection.className = "breweries";
    let breweriesTitle = document.createElement("h3");
    breweriesTitle.innerHTML = breweries.name;
    breweriesSection.append(breweriesTitle);
    breweriesSection.append(createbreweriesPara("type: " + breweries.brewery_type));
    breweriesSection.append(createbreweriesPara(breweries.street));
    breweriesSection.append(createbreweriesPara(breweries.state));
    breweriesSection.append(createbreweriesPara(breweries.postal_code));
    breweriesSection.append(createbreweriesPara(breweries.country));
    breweriesSection.append(createbreweriesPara(breweries.phone));
    breweriesSection.append(createbreweriesPara(breweries.website_url));


    return breweriesSection;
}

function createReviewsList(reviews){
    //loop through reviews, and add them as a 
    //bulleted list
    let ulElem = document.createElement("ul");

    for(i in reviews){
        let liElem = document.createElement("li");
        liElem.innerHTML = reviews[i];
        ulElem.append(liElem);
    }
    return ulElem;
}

function createbreweriesPara(text){
    let breweriesP = document.createElement("p");
    breweriesP.innerHTML = text;
    return breweriesP;
}

window.onload = function(){
    this.displaybreweriess();
}