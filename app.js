// esercizio 1
let firstNumber = prompt('Inserisci il primo numero');
let secondNumber = prompt('Inserisci il secondo numero');

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber) {
    console.log(secondNumber);
} else
    console.log('i due numeri inseriti sono uguali');

console.log('---');

// esercizio 2
let firstWord = prompt('Inserisci la prima parola');
let secondWord = prompt('Inserisci la seconda parola');

if (firstWord.length < secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
} else if (firstWord.length > secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);
} else
console.log('le due parole sono lunghe uguali');

console.log('---');

// esercizio 3
let sum = 0;
for (let i = 1; i <= 10; i++) {
    let numberUser = parseFloat(prompt('Inserisci un numero'));
    // let number = parseFloat(numberUser);
    sum += numberUser;
}
console.log(sum);
console.log('---');

// esercizio 4

let odd = [];

for (i = 0; i < 6; i++) {
    let yourNumber = parseFloat(prompt('Inserisci un numero'));
    // let myNumber = parseFloat(yourNumber);
    if (!(yourNumber % 2 === 0)) {
        odd.push(yourNumber);
    }
}
console.log(odd);