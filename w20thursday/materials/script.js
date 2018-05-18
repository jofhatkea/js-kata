"use strict";

// listen for clicks on the color-selectors

let container = document.querySelector("#colorselector");
container.addEventListener("click", e=>{
    //console.log(e.target)
    const clickedLi = e.target;
    console.log(clickedLi.dataset.color);
    document.documentElement.style.setProperty("--basecolor", clickedLi.dataset.color);
})

// when one is clicked:

    // find the element that was clicked

    // find the color from that element

    // set the css variable --basecolor 
