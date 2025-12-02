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