// https://www.javascripttutorial.net/javascript-do-while/

// generate secret number is a random integer between 1 and 12

//First, generate a random number between the MIN (included) and MAX (included) function.
const MIN = 1;                          
const MAX = 12;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

//Second, get a random integer from the user and check it with the secret number. 
//If the number is different from the secret number, give the user a hint, otherwise, display the congratulation message.

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint

//Third, repeat the second step until the number provided by users matches the generated random number.
do {
    // get input from user
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);
    // get the integer
    let number = parseInt(input);
    // increase the number of guesses
    guesses++;
    // check input number with the secret number
    // provide hint if needed
    if (number > secretNumber) {
        hint = ', and less than ' + number;
    } else if (number < secretNumber) {
        hint = ', and greater than ' + number;
    } else if(number == secretNumber) {
        alert(`Bravo! you're correct after ${guesses} guess(es).`);
    }
} while (number != secretNumber);