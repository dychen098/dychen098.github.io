async function displayMovies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let moviesJson = await response.json();
    let contentDiv = document.getElementById("content");

    //loop through shoes array
    for(i in moviesJson){
        let movie = moviesJson[i];
        contentDiv.append(getMovieItem(movie));
    }
}

function getMovieItem(movie){
    let movieSection = document.createElement("section");
    movieSection.className = "movie";
    let movieTitle = document.createElement("h3");
    movieTitle.innerHTML = movie.title;
    movieSection.append(movieTitle);
    movieSection.append(createMoviePara("Director: "+movie.director));
    movieSection.append(createMoviePara("Actors: " +movie.actors ));
    // movieSection.append(createActorsList(movie.actors ));
    movieSection.append(createMoviePara("Year: "+movie.year));
    movieSection.append(createMoviePara("Genre: "+movie.genres + " "));
    movieSection.append(createMoviePara(movie.description));
    //picture selector
    if (movie.img == "images/the-godfather.jpg") {
        movieSection.append(createMoviePara('<img src = "https://portiaportia.github.io/csce242/json/images/the-godfather.jpg">'));
    } else if (movie.img == "images/the-shawshank-redemption.jpg"){
        movieSection.append(createMoviePara('<img src = "https://portiaportia.github.io/csce242/json/images/the-shawshank-redemption.jpg">'));
    }else if (movie.img == "images/pulp-fiction.jpg"){
        movieSection.append(createMoviePara('<img src = "https://portiaportia.github.io/csce242/json/images/pulp-fiction.jpg">'));
    }else if (movie.img == "images/the-dark-knight.jpg"){
        movieSection.append(createMoviePara('<img src = "https://portiaportia.github.io/csce242/json/images/the-dark-knight.jpg">'));
    }else if (movie.img == "images/goodfellas.jpg"){
        movieSection.append(createMoviePara('<img src = "https://portiaportia.github.io/csce242/json/images/goodfellas.jpg">'));
    }

    return movieSection;
}

function createActorsList(actors){
    //loop through reviews, and add them as a 
    //bulleted list
    let ulElem = document.createElement("ul");

    for(i in actors){
        let liElem = document.createElement("li");
        liElem.innerHTML = actors[i];
        ulElem.append(liElem);
    }
    return ulElem;
}

// function createActorsList(actors, text){
//     //loop through reviews, and add them as a 
//     //bulleted list
//     let ulElem = document.createElement("ul");

//     for(i in actors){
//         let liElem = document.createElement("p");
//         liElem.innerHTML = actors[i];
//         ulElem.append(liElem);

//     }
    
//     return ulElem;
// }


function createMoviePara(text){
    let movieP = document.createElement("p");
    movieP.innerHTML = text;
    return movieP;
}

// function createImg(img){
//     let movieImg = document.createElement("img");
//     movieImg.innerHTML = img;
//     return movieImg;

    
    
// }

window.onload = function(){
    this.displayMovies();
}