


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
    teamHeading.append(getTeamButtons(team));
    teamContentDiv.append(teamHeading);
    teamContentDiv.appendChild(getTeamExpand(team));
    return teamDiv;
}


function getTeamButtons(team){
    let buttonsDiv = document.createElement("div");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    editButton.innerHTML = "Edit"
    deleteButton.innerHTML = "Delete";
    editButton.setAttribute("data-id", team._id);
    deleteButton.setAttribute("data-id", team._id);
    editButton.onclick = showEditForm;
    deleteButton.onclick = deleteTeam;
    buttonsDiv.append(editButton);
    buttonsDiv.append(deleteButton);
    return buttonsDiv;
}

async function showEditForm(){
    let teamId = this.getAttribute("data-id");
    document.getElementById("edit-team-id").textContent = teamId;

    let response = await fetch(`api/teams/${teamId}`);

    if(response.status != 200){
        return;
    }

    let team = await response.json();
        document.getElementById("edit-team-name").value = team.name;
        document.getElementById("edit-team-homecity").value= team.homecity;
        document.getElementById("edit-team-arena").value= team.arena;
        document.getElementById("edit-team-cups").value= team.cups;
        document.getElementById("edit-team-division").value= team.division;

    if(team.players != null){
        document.getElementById("dit-team-players").value = team.players.join('\n');
    }

}

async function deleteTeam(){
    //clearError();
    let teamId = this.getAttribute('data-id');

    let response = await fetch(`/api/teams/${teamId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        }
    });
    if(response.status != 200){
        console.log("Error deleting team");
        return;
    }
    
    let team = await response.json();
    console.log("successful delete");
    showTeams();
}


function getTeamExpand(team){
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
    const name = document.getElementById("add-team-name").value;
    const homecity = document.getElementById("add-team-homecity").value;
    const arena = document.getElementById("add-team-arena").value;
    const cups = document.getElementById("add-team-cups").value;
    const division = document.getElementById("add-team-division").value;
    const playersText = document.getElementById("add-team-players").value;
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


async function editTeam(){
    const id = document.getElementById("edit-team-id").textContent;
    const name = document.getElementById("edit-team-name").value;
    const homecity = document.getElementById("edit-team-homecity").value;
    const arena = document.getElementById("edit-team-arena").value;
    const cups = document.getElementById("edit-team-cups").value;
    const division = document.getElementById("edit-team-division").value;
    const playersText = document.getElementById("edit-team-players").value;
    const players = playersText.split("\n");
    const feedbackP = document.getElementById("edit-feedback");
    feedbackP.classList.remove("error");
    feedbackP.classList.remove("success");
    feedbackP.classList.remove("hidden");

    let team = {"name": name, "homecity": homecity, "arena": arena, "cups": cups, "division":division, "players":players};
    console.log(team);

    let response = await fetch(`/api/teams/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(team),
    });

    if(response.status != 200){
        feedbackP.innerHTML = "Error Adding Team";
            feedbackP.classList.add("error");
            setTimeout(function() {feedbackP.innerHTML = " "; }, 2000);
        return;
    }

    let result = await response.json();
    feedbackP.innerHTML = "Successfully Added Team";
    feedbackP.classList.add("success");
    setTimeout(function() {feedbackP.innerHTML = " "; }, 2000);

    showTeams();
}


function hide() {
    const x = document.getElementById("team-forms");
    if (x.style.display === "none") {
      x.style.display = "block";
      console.log("show")
    } else {
      x.style.display = " none";
      console.log(" no show")
    }
}

// function hide() {

//     const x = document.getElementById("panel");
//     if (x.style.display === "none") {
//       x.style.display = "block";

//     } else {
//       x.style.display = " none";

//     }
// }

window.onload = function(){
    this.document.getElementById("btn-add-team").onclick = addTeam;
    this.showTeams();

    this.document.getElementById("btn-edit-team").onclick = editTeam;
}
