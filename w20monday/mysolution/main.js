`use strict`

const popup = document.querySelector("#popUp");
const button = document.querySelector(".btn")
window.addEventListener("load", ()=> {
    popup.style.transform = `translateY(-60vh)`;

    button.addEventListener("click", ()=> {
        popup.style.transform = `translateY(60vh)`;


}); 
}); 