// async function showTeams(){
//     let response = await fetch("/api/teams");
//     let teamsJson = await response.json();
//     console.log(teamsJson);

//     let contentDiv = document.getElementById("content");

//     for(i in teamsJson){
//         contentDiv.append(makeTeamElem(teamsJson[i][0]));
//     }
// }

// function makeTeamElem(team){
//     const teamElem = document.createElement("div");
//     teamElem.classList.add("team");

//     teamH2= document.createElement("h2");
//     teamH2.innerHTML = team.name;
//     teamElem.append(teamH2);
//     teamP = document.createElement('p');
//     teamP.innerHTML = `has ${team.colors} icing and ${team.goalie} tiers`;
   
//     teamElem.append(teamP);
//    // movieSection.append(createMoviePara("Director: "+movie.director));teamElem.append(teamP);

//     return teamElem;
// }

// window.onload = function(){
//     this.showTeams();
// }

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
    //picture selector
    if (team.logo == "images/penguins.jpg") {
        teamSection.append(createTeamPara('<img src = "public/images/penguins.jpg">'));
    } else if (team.logo == "images/vgk.jpg"){
        teamSection.append(createTeamPara('<img src = "assignment13/public/images/vgk.jpg">'));
    } else if (team.logo == "images/blackhawk.jpg"){
        teamSection.append(createTeamPara('<img src = "assignment13/public/images/vgk.jpg">'));
    } else if (team.logo == "images/maple.jpg"){
        teamSection.append(createTeamPara('<img src = "assignment13/public/images/vgk.jpg">'));
    } else if (team.logo == "images/tampa.jpg"){
        teamSection.append(createTeamPara('<img src = "assignment13/public/images/vgk.jpg">'));
    } else if (team.logo == "images/oil.jpg"){
        teamSection.append(createTeamPara('<img src = "assignment13/public/images/vgk.jpg">'));
    } else if (team.logo == "images/capital.jpg"){
        teamSection.append(createTeamPara('<img src = "assignment13/public/images/vgk.jpg">'));
    };


    return teamSection;
}

function createTeamPara(text){
    let teamP = document.createElement("p");
    teamP.innerHTML = text;
    return teamP;
}

window.onload = function(){
    this.showTeams();
}

