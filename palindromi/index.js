//Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma//
/*
 1-chiedere all'utente la parola
 2-creare la funzione per verificare se la parola è palindroma
 3-verifica e stampa il risultato*/


let parola = prompt("inserisci qui la tua parola senza usare maiuscole o numeri : (osso)")

function parolaPalindroma(parola) {
    let parolainvertita = parola.split("").reverse().join("");
    return parola === parolainvertita;
}

if (parolaPalindroma(parola)) {
    console.log(`la parola ${parola} è palindroma`)
} else {
    console.log(`la parola ${parola} non è palindroma`)
}
