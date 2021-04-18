"use strict";
let kaina;
const pvm = 0.21;

do {
    kaina = prompt("Iveskite prekes kaina");
    kaina = Number(kaina);
}
while (isNaN(kaina) || kaina <= 0);

let mokestis = kaina * pvm;
let bendraKaina = kaina + mokestis;

console.log("Prekes kaina su PVM: " + bendraKaina.toFixed(2) + " Eu");
console.log("PVM: " + mokestis.toFixed(2) + " Eu");
console.log("Prekes kaina be PVM " + kaina.toFixed(2) + " Eu");
