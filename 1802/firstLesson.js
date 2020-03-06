//JavaScript is the programming language of HTML and the Web.

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables

//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

var firstname = "Naira";
var firstname = "Narine";

console.log(firstname, firstname)

/* var, const, let */

var x;
x=1
console.log(x)

const y = "this is const"
// y="hello"
console.log(y)

let z;
console.log(z)

/*
Let = can be updated but not re-directed.
const = cannot be updated and redirected.
var = can be redirected and updated
*/


var myMessage = "Hi, this is default value";
 
var howmany = 4;

if(howmany>3){
    myMessage = "myMessage variable has been updated";
}
console.log(myMessage)

// math

var firstnumber;
var secondnumber;
firstnumber =10;
secondnumber = 20;
var total = firstnumber + secondnumber;

console.log("TOTAL=>",total);

var a,b,c;
a=1;
b=2;
c=a+b;
console.log(c)
var abstract =1;
console.log(abstract)

//https://www.w3schools.com/js/js_reserved.asp

/*
a==b
b = 10;

mySum = 5+6
*/

var myNumber = 1;
var pi = 3.14;
var LNumber = 1000000000;
var myString = "This is String";
var myBoolean = true;
var myBoolean1 = false;

/* var a=5;
undefined
var b=6;
undefined
var app = document.getElementById("demo")
undefined
var c = a+b;
undefined
app.innerHTML=c
11 */

/* 
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement */

var myVariable = 100;
myVariable += 40; //myvariable = myVariable + 40
console.log(myVariable);

var fullname = "Jack"
fullname += "Sparrow"
console.log(fullname)


var asd = 6 + 6;
var test = Number('3') + 1;
var test1 = "3" + 1;
console.log(test1," ",asd," ", test);

console.log("Substraction=>",10-5);
console.log("Division=>",10/2);
console.log("Modulus=>",100%10);

let myInc =10;
let myDec =10;
myInc++
++myInc
myDec--
--myDec
console.log(myInc, " ", myDec);

// Javascript Comparison Operators

/* 
https://www.w3schools.com/js/js_comparisons.asp

==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
*/

var intec1 = 5;
var intec2 = 10;
var intec3 = "5";
var intec4 = intec1;

console.log(intec1==intec3) //checking value only
console.log(intec1===intec3) //checking both the value and the type
console.log(intec1==intec4)
console.log(intec1===intec4)
console.log(intec1!=intec2)
console.log(intec1>intec2)
console.log(intec1>=intec3)
console.log(intec1<=intec3)

/* Logical Operators
// https://www.w3schools.com/js/js_comparisons.asp
 &&	and
 ||	or
 !	not
*/
var showMe = (intec1!=intec2) && (intec1 < intec2);
console.log((intec1!=intec2) && (intec1 < intec2))

var showMe = (intec1>intec2) || (intec1 == intec2);
console.log(intec1>intec2) || (intec1 == intec2);

var showMe = !(intec1<intec2);
console.log(showMe);

// condition ? firstvalue : secondvalue

showMe = intec1<intec2 ? "true":"false";
showMe = "String" === "String" ? "Hello friend":"false";
console.log(showMe);



var userInput ="5";
var converteduserInput = Number(userInput)
console.log(converteduserInput)


var oldsal = 3000;
var txt_wage = 420;
var newsalary = 3000-420;
console.log(newsalary)

var foodChecks = 432;
var ecoChecks = 215;
var totalChecks = 432+215;
console.log(totalChecks)