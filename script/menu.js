let adaptiveMenu = document.querySelector('.menuLines')
let mainMenu = document.querySelector('.mainMenu')
let menuLines = document.querySelector('.menuLines')
let body = document.querySelector('body')
let substrate = document.querySelector('.substrate')
let menuLineSpan = document.querySelectorAll('.menuLineSpan')
let mainMenuLiA = document.querySelectorAll('.mainMenuLiA')

function showHideMenu() {

    mainMenu.classList.toggle("mainMenuActive")
    menuLines.classList.toggle("menuLinesActive")
    body.classList.toggle("overflow")
    substrate.classList.toggle("flex")
    for (i = 0; i < menuLineSpan.length; i++) {
        menuLineSpan[i].classList.toggle("whiteBg")
    }
    for (i = 0; i < mainMenuLiA.length; i++) {
        mainMenuLiA[i].classList.toggle("whiteColor")
    }
}
adaptiveMenu.addEventListener("click", showHideMenu);
