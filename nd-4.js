"use strict";

let skaiciuMasyvas = [230, 18, 12.232, -100, 61, 32, -17, 0, 4, 16];
let suma = 0;
let didziausias = skaiciuMasyvas[0];
let maziausias = skaiciuMasyvas[0];

for (let i = 0; i < skaiciuMasyvas.length; i++) {
    suma += skaiciuMasyvas[i]
    // suma = suma + skaiciuMasyvas[i]; galima ir taip rasyti

    if (skaiciuMasyvas[i] > didziausias) {
        didziausias = skaiciuMasyvas[i]
    }

    if (skaiciuMasyvas[i] < maziausias) {
        maziausias = skaiciuMasyvas[i]
    }
}

console.log("Skaiciu suma: " + suma.toFixed(2));
console.log("Skaiciu vidurkis: " + (suma / skaiciuMasyvas.length).toFixed(2));
console.log("Didziausias skaicius: " + didziausias);
console.log("Maziausias skaicius: " + maziausias);
// console.log("Paskutinis skaicius: " + skaiciuMasyvas[skaiciuMasyvas.length - 1])