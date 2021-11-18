
function init() {
    const mainElements = document.querySelectorAll(".menuItem");
    for (let elem of mainElements) {
        elem.addEventListener('click', menuClick)
    }

}

function menuClick(event) {
    let details = document.querySelectorAll(".details");
    for (let item of details) {
        item.style.display = "none";
    }
    let parentElem = this.parentElement;
    console.log(parentElem.children);
    for (let sibilingOfTarget of parentElem.children) {
        if (sibilingOfTarget.getAttribute("class") === "details") {
            console.log(sibilingOfTarget);
            sibilingOfTarget.style.display = "block";
        }
    }
}

init()