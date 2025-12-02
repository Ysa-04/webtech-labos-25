/* SET TIMEOUT */
/*
taken die je wil doen op je vrije dag
- stofzuigen
- afwasmachine opzetten
- was doen
- gamen (veel van dit, weinig van dat)

1. afwasmachine opzetten  | de wasmachine opzetten (gaat al draaien) //asynchroon
2. stofzuigen //synchroon met 1
3. je begint te gamen //synchroon met 1
4. als de wasmachine en afwasmachine leeg zijn maak je die leeg //asynchroon

-> taken opgesplitst, niet synchroon maar asynchroon. zo kan je meer gedaan krijgen
op web gebeurt veel asyhnchroon, komt in js beter tot zijn recht dan in bv c# (functionele programmeertaal)
*/

//functie die je gaat moeten kennen: setTimeout() -> een functie wordt uitgevoerd na een verloop van tijd. 1e argument: functie, 2e argument tijd in milliseconden
setTimeout(() => {
    console.log("wasmachine is klaar"); 
    }, 5000 //na 5 seconden gaat die deze console log uitvoeren
);
setTimeout(() => {
    console.log("afwasmachine is klaar!");
    }, 2000 // deze gaat VOOR de eerste setTimeout uitgevoerd worden omdat het programma hier kijkt naar de tijd die je meegeeft!!
);
// functie die een andere functie als parameter als input heeft --> CALLBACK FUNCTIES

/* CALLBACK FUNCTIES */
let printOutput = (thingToPrint) => {
    console.log(thingToPrint);
}
let add = (a,b) => {
    printOutput(a + b);
}
add(5,5);
// de add functie heeft een dependency op printOutput -> als die naar een andere file verplaatst wordt is die out of reach bv (geen pure function dus)
// oplossing (functie puur maken):
let add2 = (a,b, callbackFn) => {
    let sum = a + b;
    callbackFn(sum); //weet niet wat callbackFn doet, geeft dit gewoon door
}
add2(5,5);

let printOutputToAlert = (thingToPrint) => {
    alert(thingToPrint);
}
add2(5,5, printOutputToAlert);

//inline:
add3(5,5, (result) => 
    console.log(result)
);
document.addEventListener("click", (event) => {
    event.preventDefault()
});

/* FACTORY FUNCTION */
// functies kunnen ook een andere functie returnen
let calculator = (operator) => {
    if (operator === "+") {
        return (a,b) => {return a+b}
    }
    if (operator === "-") {
        return (a,b) => {return a+b}
    }
}
let sum = calculator("+");
let result = sum(5,5);
console.log(result);

// simpele datatypes:
let a = 5;
let b = a;
a = 10;
console.log(b); //verwachte waarde van b is 5

//complexe datatypes: arrays en objects
let myArray = [1,2,3];
let mySecondArray = myArray;
myArray.push(4);
console.log(mySecondArray); //verwachte waarde 123, maat het is 1234. waarom? de draad wordt niet 'doorgesneden'.ze zijn linked, om data te besparen. verwijst naar de array ipv die te kopieren

//spreadoperator
let myThirdArray = [...myArray]; // zorgt ervoor dat als je iets pusht in myArray het niet gepushed wordt in myThirdArray -> shallow copy

let person = {
    name: "philippe",
    occupation: "teacher",
    address: {
        street: "yeetstreet",
        number: 123,
        city: "hornytown"
    }
}

let secondPerson = person;
person.name = "andie";
person.address.street = "yoinkietoinkie st"
console.log(secondPerson); //eerste persoon aangepast maar de tweede persoon verandert mee

let thirdPerson = {...person}; //shallow copy
console.log(thirdPerson); //blijft Philippe

console.log(thirdPerson.address.street); //verandert mee, is shallow copy, geen DEEPcopy
thirdPerson = {...person, adress: {...person.address}} //adres verandert niet mee. geneste shallow copy

let enchantedPerson = {...person, enchanted:true} //iets toevoegen aan je object
let fourthPerson = {
    ...person, 
    hobbies: ["gaming", "drumming"]
}; //subobject aan je object toevoegen

/* ARRAY FUNCTIES */
let numbers = [1,4,5,6];
//for (let i =0; i < numbers.length; i++) {}
//for (let element of elements)
//forEach is een arrayfunctie
numbers.forEach((value, index) => {
    console.log("op plaats" + index + "staat:" + value);
}); //verwacht een callbackfunction. verhoogt index automatisch

let numbers2 = [10, 20, 30, 40];
let newArray = numbers2.map((value) => {
    return value / 2;
});
console.log(newArray);