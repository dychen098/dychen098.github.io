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

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;
}
