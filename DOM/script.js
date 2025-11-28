"use strict";

//DOM
// 1 element teruggeven (de enige of de eerste die die vindt):
let element = document.querySelector("h2");
console.log(element); //checken of je de juiste hebt.
console.log(element.textContent); //text

let card = document.querySelector(".card");
console.log(card.innerHTML); //html die ergens in zit

//meerdere elementen selecteren
let moreCards = document.querySelectorAll(".card"); //alle .cards ikn een soort array teruggegeven
console.log(moreCards[2]); //derde kaart bv

for (let card of moreCards) {
    card.remove; //alle kaarten verwijderen
}

// een selectie doen (bv body tag). je kan binnen dat element opnieuw een selector doen: je kan da chainen
let elements = document.querySelector("body");
let firstDivBody = elements.querySelector("div");

//geen getElementById meer gebruiken. Waarom niet? querySelector is algemeen en flexibel. 
//ook pseudoselectors:
let secondDivBody = elements.querySelector("div:nth-of-type(2)");

let firstCard = document.querySelector(".card");
console.log(firstCard.parentElement);
console.log(firstCard.children);

document.querySelector("h2").textContent = "Hello from JS";
document.querySelector(".card").innerHTML = "<img src='image.jpg'>";

/*
verschil innerHTML en textContent:
    textContent = letterlijke tekst.
    innerHTML om effectief html ergens in te steken zoals een foto bv
*/

//attributes: (bv src)
let image = document.querySelector("img");
console.log(image.src);
image.src = "image.jpg";

//nieuwe elementen aanmaken in js (bv winkelwagen - hint!!)
let ulElement = document.querySelector("ul");
let newLi = document.createElement("li"); 
newLi.textContent = "Put the candy in the basket bitch";
ulElement.appendChild(newLi);

//css aanpassen in js (darkmode bijvoorbeeld)
document.querySelector(".card").classList.add("special-card");
document.querySelector(".card").classList.remove("card");
document.querySelector(".card").classList.toggle("special-card"); //togglen van dark naar light. als die er ni in zit toevoegen, als die er wel in zit removen. (spaart je een if else statement)

document.querySelector('.card').style.backgroundColor = blue; //aanpassen
window.getComputedStyle().backgroundColor; //uitlezen 





