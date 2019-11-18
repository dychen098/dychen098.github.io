async function showTeams(){
    let response = await fetch("/api/teams");
    let teamsJson = await response.json();
    console.log(teamsJson);

    let contentDiv = document.getElementById("content");

    //loop through team array
    for(i in teamsJson){
        let team = teamsJson[i];
        contentDiv.append(getTeamItem(team));
    }

    // for(j in colorsJson){
    //     let color = colorJson[j]
    //     contentDiv.append(getTeamItem(team(color)));
    // }
}

function getTeamItem(team, color){
    let teamSection = document.createElement("section");
    teamSection.className = "team";
    let teamName = document.createElement("h3");
    teamName.innerHTML = team.name;
    teamSection.append(teamName);
    teamSection.append(createTeamPara("Colors: "+team.colors));
    teamSection.append(createTeamPara("Home City: " +team.homecity ));
    teamSection.append(createTeamPara("Arena: "+team.arena));
    teamSection.append(createTeamPara("Stanley Cups: "+team.stanley));
    teamSection.append(createTeamPara("Head Coach: "+team.headcoach));
    teamSection.append(createTeamPara("Division: "+team.division));
    teamSection.append(createTeamPara("Captain: "+team.captain));
    teamSection.append(createTeamPara("Starting Goalie: "+team.goalie));
    teamSection.append(createTeamImg(team.logo));
    //picture selector
    // if (team.logo == "images/penguins.jpg") {
    //     teamSection.append(createTeamPara('<img src = "https://dychen098.github.io/assignment/assignment13/public/images/penguins.jpg ">'));
    // } else if (team.logo == "images/vgk.jpg"){
    //     teamSection.append(createTeamPara('<img src = "https://dychen098.github.io/assignment/assignment13/public/images/vgk.jpg">'));
    // } else if (team.logo == "images/blackhawk.jpg"){
    //     teamSection.append(createTeamPara('<img src = "https://dychen098.github.io/assignment/assignment13/public/images/blackhawk.jpg">'));
    // } else if (team.logo == "images/maple.jpg"){
    //     teamSection.append(createTeamPara('<img src = "https://dychen098.github.io/assignment/assignment13/public/images/maple.jpg">'));
    // } else if (team.logo == "images/tampa.jpg"){
    //     teamSection.append(createTeamPara('<img src = "https://dychen098.github.io/assignment/assignment13/public/images/tampa.jpg">'));
    // } else if (team.logo == "images/oil.jpg"){
    //     teamSection.append(createTeamPara('<img src = "https://dychen098.github.io/assignment/assignment13/public/images/oil.jpg">'));
    // } else if (team.logo == "images/capital.jpg"){
    //     teamSection.append(createTeamPara('<img src = "https://dychen098.github.io/assignment/assignment13/public/images/capital.jpg">'));
    // };


    return teamSection;
}

function createTeamPara(text){
    let teamP = document.createElement("p");
    teamP.innerHTML = text;
    return teamP;
}

function createTeamImg(img){
    let teamImg = document.createElement("img");
    teamImg.src = "https://dychen098.github.io/assignment/assignment13/public/images/" + img;

    return teamImg;
}

window.onload = function(){
    this.showTeams();
}

