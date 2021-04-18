"use strict";
let prekesKaina;
let pristatymoMiestas;
let pristatymoKaina = 20;
let nemokamoPristatymoRiba = 50;

do {
    prekesKaina = Number(prompt("Iveskite prekes kaina"));
}
while (isNaN(prekesKaina) || prekesKaina <= 0)

let reikalingasPristatymas = confirm("Ar reikalingas pristatymas i namus?");

if (reikalingasPristatymas) {
    do {
        pristatymoMiestas = prompt("I kuri miesta reikes pristatyti?");
    }
    while (pristatymoMiestas === 0)

    if (pristatymoMiestas === "Vilnius" || pristatymoMiestas === "vilnius" || prekesKaina >= nemokamoPristatymoRiba) {
        console.log("Prekes kaina: " + prekesKaina.toFixed(2) + " Eu");
        console.log("Preke nemokamai pristatysime i " + pristatymoMiestas + "per 1-3 dienas.");
    }
    else {
        let bendraKaina = prekesKaina + pristatymoKaina;

        console.log("Prekes kaina: " + prekesKaina.toFixed(2) + " Eu");
        console.log("Pristatymas: " + pristatymoKaina.toFixed(2) + " Eu");
        console.log("Bendra suma: " + bendraKaina.toFixed(2) + " Eu");
        console.log("Preke pristatysime i " + pristatymoMiestas + " per 1-3 dienas.");
    }
}
else {
    console.log("Prekes kaina: " + prekesKaina.toFixed(2) + " Eu");
    console.log("Preke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}
