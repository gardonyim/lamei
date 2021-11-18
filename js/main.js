
function init() {
    const mainElements = document.querySelectorAll(".menuItem");
    for (let elem of mainElements) {
        elem.addEventListener('click', menuClick)
    }
    const referenceItems = document.querySelectorAll(".referenceItem");
    for (let elem of referenceItems) {
        elem.addEventListener("click", referenceClick)
    }
    const backButtons = document.querySelectorAll(".back");
    for (let button of backButtons) {
        button.addEventListener("click", goBack)
    }
}

function menuClick(event) {
    let details = document.querySelectorAll(".details");
    for (let item of details) {
        item.style.display = "none";
    }
    let parentElem = this.parentElement;
    for (let sibilingOfTarget of parentElem.children) {
        if (sibilingOfTarget.getAttribute("class") === "details") {
            sibilingOfTarget.style.display = "block";
        }
    }
}

function referenceClick(event) {
    let menu = document.querySelectorAll(".menu");
    for (let elem of menu) {
        elem.style.display = "none";
    }
    let referenceId = this.getAttribute("id").slice(7);
    let referenceArticleId = "#refArticle" + referenceId;
    let referenceArticle = document.querySelector(referenceArticleId);
    referenceArticle.style.display = "block";
}

function goBack(event) {
    let references = document.querySelectorAll(".reference");
    for (let item of references) {
        item.style.display = "none";
    }
    let menu = document.querySelectorAll(".menu");
    for (let elem of menu) {
        elem.style.display = "block";
    }
}

init()