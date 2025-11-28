"use strict";
/*
let puntenLijst1 = [0,1,2,3,5,7];
let puntenLijst2 = [6,6,6,7,9,7]; */

/* dubbele code, niet practisch 
for (let index = 0; index < puntenLijst1.length; index++) {
    cconsole.log(puntenLijst1[index]);   
}
for (let index = 0; index < puntenLijst2.length; index++) {
    cconsole.log(puntenLijst2[index]);   
}
*/

/* oplossing: functie: 
met 1 array: 
function logAllItems() {
    for (let index = 0; index < puntenLijst1.length; index++) {
    console.log(puntenLijst1[index]);
}
}
logAllItems(); /*aanroepen van de functie*/

/* met 2 arrays: 
let puntenLijst1 = [0,1,2,3,5,7];
let puntenLijst2 = [6,6,6,7,9,7];

function logAllItems(puntenArray) {
    console.log("running logAllItems");
    for (let index = 0; index < puntenArray.length; index++) {
    console.log(puntenArray[index]);
}
}
logAllItems(puntenLijst1); /*aanroepen van de functie
logAllItems(puntenLijst2);


function calculateAverage(puntenArray) {
    console.log("calculating average");
    let average;
    let total = 0;
    for (let punt of puntenArray) {
        total += punt;
    }
    average = total / puntenArray.length;
    console.log(average.toFixed(2));
}
calculateAverage(puntenLijst1); 
calculateAverage(puntenLijst2); 
*/

/* Optionele argumenten 
    niet perse een argument moeten meegeven

function calculateAverage(puntenArray = [1]) { // default meegeven zodat je niks moet megeven bij het aanroepen
    let average = 0;
    let total = 0;
    for (let punt of puntenArray) {
        total += punt;
    }
    average = total / puntenArray.length;
    console.log(average.toFixed(2));
}

function greet(name = "Philippe") {
    console.log(`hello, ${name}!`);
}
greet("Matthias is gay");
greet(); */

/* Arrow functions */
const calculateAverage = (puntenArray) => {
    let average = 0;
    let total = 0;
    for (let punt of puntenArray) {
        total += punt;
    }
    average = total / puntenArray.length;
    console.log(average.toFixed(2));
} 
// waarom gebruiken?: js is functionele taal, functies meegeven als argument aan andere functies (callbackfunction). 
// gebruiker krijgt greeting bij het klikken op een button
/*
document
    .querySelector("button")
    .addEventListener("click", () => console.log("hello there"));

js is function scoped. 
    globale variabelen = variabelen waar heel je programma aan kan.
    je wilt variabelen zo veel mogelijk private houden, je kan ook afbakenen met functies
*/
