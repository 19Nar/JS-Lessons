// Math Object

// PI Number

// console.log(Math,Pi);

/* Math.round(x) returns the value of x rounded to its nearest integer:
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4 */

console.log(Math.round(9,6));

// Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(8,2));

// Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64));


console.log(Math.sin(90 * Math.PI / 180));     // returns 1 (the sine of 90 degrees)

console.log(Math.cos(0 * Math.PI / 180));     // returns 1 (the cos of 0 degrees))

console.log("Min Number=>", Math.min(0, 150, 30, 20, -8, -200));  // returns -200)

console.log("Max Number=>", Math.max(0, 150, 30, 20, -8, -200));  // returns 150)

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):  Math.random();     // returns a random number
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*11);

/*  Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E  */

//https://www.w3schools.com/js/js_math.asp


function GetRandomNumber(min, max){
    return Mathfloor(Math).random() * (max-min +1) + min;

};
console.log(GetRandomNumber(3,6));

function GetRandomNumber(min, max){
    return Math.random() * (max-min +1) + max;

};
if(GetRandomNumber(3,6)==5){
    console.log("Found it!")
}else if(GetRandomNumber(3,6)==3){
    console.log("Found second number!")
}else{
    console.log("Nothing? Try again!")
};

console.log(GetRandomNumber(3,6));

//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range


