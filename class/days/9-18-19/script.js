"using strict"

function displayFruits(){
    // grabs the fruits
    const fruit1 = document.getElementById("fruit1").value;
    const fruit2 = document.getElementById("fruit2").value;
    const fruit3 = document.getElementById("fruit3").value;

    // writes to result paragraph
    const final = document.getElementById("final");
    final.textContent =`you like ${fruit1}, ${fruit2}, and ${fruit3}`;
}

// get button
const btnResult = document.getElementById("btn-results");
btnResult.onclick=displayFruits;