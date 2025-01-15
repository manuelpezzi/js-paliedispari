//Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.//
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}
function pariODispari(somma) {
    if (somma % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

let sceltaUtente = prompt("scegli pari o dispari").toLocaleLowerCase();
let numeroGiocatore = parseInt(prompt("inserisci un numnero da 1 a 5 :"));

let numeroDelCompuer = generaNumeroRandom();

let somma = numeroGiocatore + numeroDelCompuer;

let risultato = pariODispari(somma);

console.log(`tu hai scelto ${sceltaUtente} e hai giocato il numero ${numeroGiocatore}`);
console.log(`il computer ha giocato il numero ${numeroDelCompuer}`);
console.log(`la somma dei due numeri è ${somma} che è ${risultato}.`);
if (sceltaUtente === risultato) {
    console.log("hai vinto campione");
} else {
    console.log("hai perso");
}
