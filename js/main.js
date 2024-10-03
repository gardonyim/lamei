
function init() {
    // attachEventListeners(".menuItem", "mouseover", menuClick);
    // attachEventListeners(".referenceItem", "mouseover", referenceClick);
    // attachEventListeners(".back", "click", goBack);
    const hamburgerIcon = document.getElementById('hamburger');
    hamburgerIcon.addEventListener('click', openHamburgerMenu);
}

function openHamburgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " menuOpen";
    } else {
        x.className = "topnav";
    }
}

init()