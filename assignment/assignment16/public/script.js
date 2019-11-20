async function showTeams(){
    let teamsJson = await fetch('api/teams');
    let teams = await teamsJson.json();
    let teamsDiv = document.getElementById("teams");
    teamsDiv.innerHTML = "";

    for(i in teams){
        teamsDiv.append(getTeamElem(teams[i]));
    }
}

async function showTeam(){
    let id = document.getElementById("team-id").value;
    let response = await fetch(`api/teams/${id}`);
    let team = await response.json();

    let teamDiv = document.getElementById("team");
    teamDiv.append(getTeamElem(team));
}

function getTeamElem(team){
    let teamDiv = document.createElement("div");
    teamDiv.classList.add("team");
    let teamTitle = document.createElement("h3");
    teamTitle.innerHTML = team.id + ": " + team.name;

    let teamP = document.createElement("p");
    teamP.innerHTML = `city ${team.homecity}, division ${team.division}, captain:${team.captain}, goalie:${team.goalie}`;

    //create edit and delete links
    let editBtn = document.createElement("BUTTON");
    editBtn.href = "#edit-song-form";
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("data-id", team.id);
    editBtn.onclick =showEditTeam;
    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.href = "#";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("data-id", team.id);
    deleteBtn.onclick = deleteTeam;
    teamP.append(editBtn);
    teamP.append(deleteBtn);

            
    teamDiv.append(teamTitle);
    teamDiv.append(teamP);
    
    return teamDiv;
}

async function addTeam(){
    //get the team inforamtion
    const teamName = document.getElementById("new-team-name").value;
    const teamHomecity = document.getElementById("new-team-homecity").value;
    const teamDivision = document.getElementById("new-team-division").value;
    const teamCaptain = document.getElementById("new-team-captain").value;
    const teamGoalie = document.getElementById("new-team-goalie").value;

    console.log(`you are adding ${teamName}, ${teamHomecity}, ${teamDivision},${teamCaptain}, ${teamGoalie}`);

    let team = {"name": teamName, "homecity":teamHomecity, "division":teamDivision, "captain":teamCaptain, "goalie":teamGoalie};

    let response = await fetch('/api/teams/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(team),
    });

    if(response != 200){
        console.log("Error adding team");
        let resp = document.getElementById("add-result");
        resp.innerHTML = `created team successfully`
        return;
    }

    let result = await response.json();
    showeams();
}

async function editTeam(){
    //get the team inforamtion
    const changeId = document.getElementById("edit-team-id").textContent;
    const changeName = document.getElementById("edit-team-name").value;
    const changeHomecity = document.getElementById("edit-team-homecity").value;
    const changeDivision = document.getElementById("edit-team-division").value;
    const changeCaptain = document.getElementById("edit-team-captain").value;
    const changeGoalie = document.getElementById("edit-team-goalie").value;

    console.log(`you are changing to ${changeName}, ${changeHomecity}, ${changeDivision},${changeCaptain}, ${changeGoalie}`);

    let team = {"name": changeName, "homecity":changeHomecity, "division":changeDivision, "captain":changeCaptain, "goalie":changeGoalie};


    let response = await fetch(`/api/teams/${changeId}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(team),
    });

    if(response.status != 200){
    console.log("Error edditing song");

    //update the team list
    showTeams();
    }
}



async function deleteTeam(){
    const id = this.getAttribute("data-id");
    
    let response = await fetch(`/api/teams/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error adding team");
        return;
    }

    showTeams();
    return false;
}


async function showEditTeam(){
    const id = this.getAttribute("data-id");
    document.getElementById("edit-team-id").innerHTML = id;

    let response = await fetch(`api/teams/${id}`);
    let team = await response.json();
    document.getElementById("edit-team-name").value = team.name;
    document.getElementById("edit-team-homecity").value =team.homecity;
    document.getElementById("edit-team-division").value= team.division;
    document.getElementById("edit-team-captain").value = team.captain;
    document.getElementById("edit-team-goalie").value= team.goalie;

    return false;
}

window.onload = function(){
    this.showTeams();
    let showTeamButton = document.getElementById("btn-show-team");
    showTeamButton.onclick = showTeam;

    let addTeamButton = document.getElementById("btn-add-team");
    addTeamButton.onclick = addTeam;

    let editTeamButton = document.getElementById("btn-edit-team");
    editTeamButton.onclick = editTeam;

    // let deleteTeamButton = document.getElementById("btn-delete-team");
    // deleteTeamButton.onclick = addTeam;
}