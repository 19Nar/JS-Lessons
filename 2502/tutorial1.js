// Number Methods

var myNumber ="10";
var myFloatNumber = "10.5";
var Money = 25.39341
var ShowInConsole;

// var ShowInConsol = Number(myNumber);
// ShowInConsol =+myNumber;  this is the same way to use the number method.

ShowInConsol = parseInt(myNumber);
ShowInConsol = parseInt(myFloatNumber);
ShowInConsol = Number.isFinite(0);
ShowInConsol = Money.toFixed(2);  //toFixed() returns a string, with the number written with a specified number of decimals:



var user = 29.9999999;
var myIntChecker = user.toFixed(2);
console.log(myIntChecker);

function fixedTheSalary(Salary){

    return "Salary > " + Salary.toFixed(2)
}
console.log(fixedTheSalary(user));

// Array Methods

var books = ["book1", "book2", "book3", "book4"];
var ShowInConsol;
ShowInConsol = books.toString(); //The JavaScript method toString() converts an array to a string of (comma separated) array values.
ShowInConsol = books.join("=>"); //The join() method also joins all array elements into a string.
ShowInConsol = books.pop();  //The pop() method removes the last element from an array:
ShowInConsol = books.push("book4");
ShowInConsol = books.push("book5");

console.log("Before =>" , typeof(ShowInConsole),">", ShowInConsole, "\nAfter =>" , books);
/*
books.push("jbgkej");
books.push("jjgegogej");
console.log(books);
*/

