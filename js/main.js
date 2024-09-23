
function init() {
    attachEventListeners(".menuItem", "mouseover", menuClick);
    attachEventListeners(".referenceItem", "mouseover", referenceClick);
    attachEventListeners(".back", "click", goBack);
}

function attachEventListeners(selector, eventType, eventHandler) {
    let elemList = document.querySelectorAll(selector);
    for (let elem of elemList) {
        elem.addEventListener(eventType, eventHandler);
    }
}

function menuClick(event) {
    let currentDetails = this.parentElement.querySelector(".details");
    if (currentDetails.style.display === "block") {
        currentDetails.style.display = "none"
    } else {
        changeVisibility(".details", "none");
        currentDetails.style.display = "block";
    }
}

function referenceClick(event) {
    changeVisibility(".menu", "none");
    showReference(this.getAttribute("id").slice(7));
}

function showReference(referenceId) {
    let referenceArticleId = "#refArticle" + referenceId;
    let referenceArticle = document.querySelector(referenceArticleId);
    referenceArticle.style.display = "block";
}

function goBack(event) {
    changeVisibility(".reference", "none");
    changeVisibility(".menu", "block");
}

function changeVisibility(selector, visibility) {
    let elemList = document.querySelectorAll(selector);
    for (let elem of elemList) {
        elem.style.display = visibility;
    }
}

init()