/* JavaScript file */

const distance = Number(prompt("Inserisci il numero di chilometri da percorrere"));
const age = Number(prompt("Inserisci l'età"));
// console.log(distance, age);

if ((distance > 0) && (age > 0 && age < 121)) {
    const fullPrice = distance * 0.21;
    // console.log(fullPrice);

    let discount = 0;
    if (age < 18) {
        discount = fullPrice * 20 / 100;
    } else if (age > 65) {
        50
        discount = fullPrice * 40 / 100;
    }
    // console.log(discount);

    let ticketPrice = fullPrice - discount;
    ticketPrice = Number(ticketPrice.toFixed(2));
    // console.log(ticketPrice);

    console.log(`Il biglietto costa ${ticketPrice}€`);

    document.getElementById("site_age").innerHTML = age;
    document.getElementById("site_distance").innerHTML = distance;
    document.getElementById("site_discount").innerHTML = discount.toFixed(2);
    document.getElementById("site_price").innerHTML = ticketPrice;
} else {
    alert("Hai inserito distanza o età in formato errato!! Ricarica e riprova");

    document.getElementById("site_age").innerHTML = "???";
    document.getElementById("site_distance").innerHTML = "???";
    document.getElementById("site_discount").innerHTML = "???";
    document.getElementById("site_price").innerHTML = "???";
}









