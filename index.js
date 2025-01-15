//Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.//
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}
function pariODispari(somma) {
    return somma % === 0 ? "pari" : "dispari";
}
function gioco() {
    let pariOdispari = prompt("scegli pari o dispari").toLocaleLowerCase();
    let numeroGiocatore = parseInt(prompt("inserisci un numnero da 1 a 5 :"));

}
let numeroDelCompuer = generaNumeroRandom();

