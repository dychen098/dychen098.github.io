async function showTeams(){
    let response = await fetch(`api/teams/`);
    let teams = await response.json();
    let teamsDiv = document.getElementById("teams");
    teamsDiv.innerHTML = "";
    console.log(teams);
    for(i in teams){
        teamsDiv.appendChild(getTeamElem(teams[i]));
    }
}

function getTeamElem(team){
    let teamDiv = document.createElement("div");
    teamDiv.classList.add("team");
    let teamContentDiv = document.createElement("div");
    teamContentDiv.classList.add("team-content");
    teamDiv.append(teamContentDiv);

    //create a link to expand and contract the recipe details
    let teamHeading = document.createElement("div");
    let teamA = document.createElement("button");
    let teamH3 = document.createElement("h3");
    let teamShow = document.createElement("button");
    teamA.append(teamH3);
    teamA.onclick = expandTeam;
    teamShow.onclick = expandTeam;
    teamA.setAttribute("href", "#");
    teamA.setAttribute("data-id", team._id);
    teamH3.innerHTML = team.name;
    teamHeading.append(teamA);
    teamHeading.classList.add('team-heading');
    // teamHeading.append(getteamButtons(team));
    teamContentDiv.append(teamHeading);
    teamContentDiv.appendChild(getTeamExpand(team));
    return teamDiv;
}

function getTeamExpand(team){
    //add the recipe details
    teamExpand = document.createElement("div");
    teamExpand.setAttribute("id", team._id);
    teamExpand.classList.add("hidden");
    homecityP = document.createElement('p');
    homecityP.innerHTML = `<b>Homecity: </b> ${team.homecity}`;
    arenaP = document.createElement('p');
    arenaP.innerHTML = `<b>Arena: </b> ${team.arena}`;
    cupsP = document.createElement("p");
    cupsP.innerHTML = `<b>Number of Cups: </b> ${team.cups} cups`;
    divisionP = document.createElement('p');
    divisionP.innerHTML = `<b>Division: </b> ${team.division}`;
    teamExpand.append(homecityP);
    teamExpand.append(arenaP);
    teamExpand.append(cupsP);
    teamExpand.append(divisionP);
    teamExpand.append(getPlayersElement(team));

    return teamExpand;
}



function getPlayersElement(team){
    return getArrayInfo("Players", team.players);
}

function getArrayInfo(name, list){
    let divContent = document.createElement("div");
    let divName = document.createElement("h4");
    divName.innerHTML = name + ": ";
    divContent.append(divName);

    let ulElem = document.createElement("ul");
    for(i in list){
        liElem = document.createElement("li");
        liElem.innerHTML = list[i];
        ulElem.append(liElem);
    }
    divContent.append(ulElem);
    return divContent;
}

function expandTeam()
{
    let expandId = this.getAttribute("data-id");
    let expandElem = document.getElementById(expandId);
    expandElem.classList.toggle("hidden");
    return false;
}


async function addTeam(){
    const name = document.getElementById("txt-add-team-name").value;
    const homecity = document.getElementById("txt-add-team-homecity").value;
    const arena = document.getElementById("txt-add-team-arena").value;
    const cups = document.getElementById("txt-add-team-cups").value;
    const division = document.getElementById("txt-add-team-division").value;
    const playersText = document.getElementById("txt-add-team-players").value;
    const players = playersText.split("\n");
    const feedbackP = document.getElementById("add-feedback");
    feedbackP.classList.remove("error");
    feedbackP.classList.remove("success");
    feedbackP.classList.remove("hidden");

    let team = {"name": name, "homecity": homecity, "arena": arena, "cups": cups, "division":division, "players":players};
    console.log(team);

    let response = await fetch('/api/teams/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(team),
    });

  

    if(response.status != 200){
        feedbackP.innerHTML = "Error Adding Team";
            feedbackP.classList.add("error");
            setTimeout(function() {feedbackP.innerHTML = " "; }, 3000);
        


        return;
    }

    let result = await response.json();
    feedbackP.innerHTML = "Successfully Added Team";
    feedbackP.classList.add("success");
    setTimeout(function() {feedbackP.innerHTML = " "; }, 3000);

    showTeams();
}




window.onload = function(){
    this.document.getElementById("btn-add-team").onclick = addTeam;
    this.showTeams();

    // this.document.getElementById("btn-edit-recipe").onclick = editRecipe;
}
