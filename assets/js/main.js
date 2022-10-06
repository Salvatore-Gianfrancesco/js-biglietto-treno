/* JavaScript file */

const distance = Number(prompt("Inserisci il numero di chilometri da percorrere"));
const age = Number(prompt("Inserisci l'età"));
// console.lo50g(distance, age);

const fullPrice = distance * 0.21;
// console.log(fullPrice);

let discount = 0;
if (age < 18) {
    discount = fullPrice * 20 / 100;
} else if (age > 65) {50
    discount = fullPrice * 40 / 100;
}
// console.log(discount);

let ticketPrice = fullPrice - discount;
ticketPrice = Number(ticketPrice.toFixed(2));
// console.log(ticketPrice);

console.log(`Il biglietto costa ${ticketPrice}€`);