"use strict";
/*
// click event op button
let buttonElement = document.querySelector("button");
function onClick() {
    console.log("heyyy");
    //na 1 keer klikken stoppen
    buttonElement.removeEventListener("click", onClick()); //je kan maar 1x klikken
}
buttonElement.addEventListener("click", onClick()); //blijft geregistreerd, reset niet

let cardEl = document.querySelector(".card");
cardEl.addEventListener("click", () => { //inline, j ekan die nergens anders oproepen
    console.log("you clicked the card");
});

let cardEl2 = document.querySelector(".card");
cardEl.addEventListener("keydown", (event) => {
    console.log("you clicked the card", event); //metadata over event zien in console
}); 


//logt de toets die je hebt ingevoerd
document.addEventListener("keydown", (event) => {
  console.log(`you pressed the '${event.key}' key.`);
});

//button in een formulier
document.querySelector(".submit").addEventListener("click", () => {
    let username = document.querySelector("input").value;
    console.log(username);
});
*/

// voorkomen da je zowel op card als op button klikt wanneer je enkel button wilt:
let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", () => {
    stopPropagation(); //in child element!
    console.log("you clicked the button");
});

let cardClick = document.querySelector(".card");
cardClick.addEventListener("click", () => {
    console.log("you clicked the card");
});

