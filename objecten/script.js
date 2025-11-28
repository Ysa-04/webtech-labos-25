"use strict";

let keyToRead = "startYear";

// let serie = {}; nieuw leeg object 
let Wednesday = {
    name: "Wednesday", 
    creator: "Tim Burton", 
    startYear: 2022,
    stars: [{
        name:"Lady Gaga",
        dateOfBirth: "1/01/1999",
        bio: "Lorem Ipsum"
    }, {
        name: "Jenna Ortega",
        dateOfBirth: "02/02/2002",
        bio: "Lorem Ipsum"
    }]
}
//serie-object met naam, creator, jaar en array van acteurs
console.log(Wednesday.name); //geeft naam, ditnotatie, meest gebruikt
console.log(Wednesday.creator);
console.log(Wednesday.startYear);

console.log(Wednesday["name"]); //geeft naam, andere notatie. gebruikt als je de key uit een variabele moet halen
console.log(Wednesday[keyToRead]); //om interpolatie te doen

for (let star of Wednesday.stars) {
    console.log(star) //alle info bij de acteurs
}

for (let star of Wednesday.stars) {
    console.log(star.name) //enkel de namen van de acteurs
}

console.log(Wednesday.stars[1].bio); //tweede acteur hun bio

let Futurama = {
    name: "Futurama", 
    creator: "Tim Burton", 
    startYear: 2022,
    stars: [{
        name:"Lady Gaga",
        dateOfBirth: "1/01/1999",
        bio: "Lorem Ipsum"
    }, {
        name: "Jenna Ortega",
        dateOfBirth: "02/02/2002",
        bio: "Lorem Ipsum"
    }]
}

let myFavorites = [Wednesday, Futurama];

for (let favorite of myFavorites) {
    console.log(favorite.name);
}

for (let [key, value] of Object.entries(Futurama)) {
    console.log(key, value);
}

function listSerie(serie) {
    return `${serie.name} - ${serie.stars.bio}`;
}

// JSON javascript object notation
/*
let futuramaJSON = {
    "name": "Futurama",
    "creators": "jason derulo",
    "startYear": 1944,
    "stars": [
        ...
    ]
} */
