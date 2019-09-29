`uisng strict`

function toggleNav(){
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden");
}

function togglePara(){
    console.log("toggling");
    const moreInfoPara = document.getElementById("more-info");
    // moreInfoPara.classList.toggle("hidden"); this is for toggle css
    moreInfoPara.hidden = !moreInfoPara.hidden; //js way, js has prioirty
    return false; //don't do default behavior

}

function validateFirstName(){
    //console.log(this.value);
    //show an error when value is blank

    let errorSpan = document.getElementById("error-first-name");

    if(errorSpan != null) {
        errorSpan.remove();
    }

    if(this.value.trim() == ""){ //.trim takes up the whitespace
        const errorSpan = document.createElement("span");
        errorSpan.id = "error-first-name";
        errorSpan.innerHTML= "* Blank";
        errorSpan.classList.add("error");
        this.after(errorSpan);
    }
}

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;

    //hide more info paragraph on page load

    const moreInfoPara = document.getElementById("more-info");
    // moreInfoPara.classList.add("hidden");  this is for toggle css
    moreInfoPara.hidden=true; //js way

    const expandLink = document.getElementById("expand-link");
    expandLink.onclick = togglePara;

    const firstNameTB = document.getElementById("txt-first-name");
    firstNameTB.addEventListener("keyup", validateFirstName);
}
