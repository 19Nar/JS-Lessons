var x = "Firstname" + "Lastname";
var y = "Firstname" + "Lastname";
console.log(x);
console.log(y);

var number1 = 1+1;
console.log(number1);

var ON = true;
var OFF = false;
console.log(ON, "", OFF)
console.log(typeof(ON));

// Hex, Binary Octal numbers   console.log(0xoff)

/*
// our decimal number
const nr = 999999999;

// convert to hex
const hex = nr.toString(16);

// back to dec:
const decNr = parseInt(hex, 16);
*/

/* However, the example above can only handle numbers till Number.MAX_SAFE_INTEGER => 9007199254740991

const converter = require('hex2dec');

const hex = converter.decToHex("90071992547409919007199254740991"); // bigger than 9007199254740991
const dec = converter.hexToDec(hex); // => "90071992547409919007199254740991"
You have to use arrays if you still need bigger numbers */

var thisIsVar = 123;
thisIsVar = 321; //updated
var thisIsVar = "String";
console.log(thisIsVar);

let thisIsLet = 123;
thisIsLet = 321;
// let thisIsLet = "This is string now"; 
console.log(thisIsLet);

let s1 = "1+1";
let s2 = new String("1+1");

console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s1 == s2));
console.log(eval(s1 != s2));

var Student = {
    studentName: "Max",
    studentAge: 29
};
console.log(Student);

var test = "name" +5;
console.log(test);

var myNumber = "5";
console.log(typeof(Number(myNumber)));

const myvalue = 1 + "";
console.log(typeof(myvalue));

let thiIsInt ="15";
thiIsInt = +thiIsInt; // the same as Number(thiIsInt)
console.log(typeof(thiIsInt));

console.log(+true);
console.log(+false);

// Increment and Decrement
let Inc = 1;
let Dec = 10;

Inc++;
Dec--;
console.log(Inc);
console.log(Dec);