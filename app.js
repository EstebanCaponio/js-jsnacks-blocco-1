// esercizio 1
let firstNumber = prompt('Inserisci il primo numero');
let secondNumber = prompt('Inserisci il secondo numero');

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else
    console.log(secondNumber);
console.log('---');

// esercizio 2
let firstWord = prompt('Inserisci la prima parola');
let secondWord = prompt('Inserisci la seconda parola');

if (firstWord.length < secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
} else {
    console.log(secondWord);
    console.log(firstWord);
}
console.log('---');

// esercizio 3
let somma = 0;
for (let i = 1; i <= 10; i++) {
    let numberUser = prompt('Inserisci un numero');
    let number = parseFloat(numberUser);
    somma = somma + number;
}
console.log(somma);
console.log('---');

// esercizio 4

let dispari = [];

for (i = 0; i < 6; i++) {
    let yourNumber = prompt('Inserisci un numero');
    let myNumber = parseFloat(yourNumber);
    if (!(myNumber % 2 === 0)) {
        dispari.push(myNumber);
    }
}
console.log(dispari);