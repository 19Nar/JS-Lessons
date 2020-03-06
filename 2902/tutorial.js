// Shift Method
/*The shift() method removes the first item of an array.

var books = ["book1", "book2", "book3", "book4"];
var ShowInConsol;
ShowInConsol = books.toString(); //The JavaScript method toString() converts an array to a string of (comma separated) array values.
ShowInConsol = books.join("=>"); //The join() method also joins all array elements into a string.
ShowInConsol = books.pop();  //The pop() method removes the last element from an array:
ShowInConsol = books.push("book4");
ShowInConsol = books.push("book5");

books.push("Esse Homo");
books.push("jbgkeqbgjeglen");
books.push("10");
books.push("true");
console.log(books);

books.push("NewNook6");

ShowInConsole = books.shift();
ShowInConsole = books.unshift("NewBook1");
console.log(ShowInConsole, "\nNewArray=> ", books);
*/
var books = ["books1", "books2", "books3", "books4", "books5"];


function myFunction(){
    var oldArray = document.getElementById("oldArray").innerText=books;
    var myResult = document.getElementById("result").innerText = ShowInConsole;
    var ShowInConsole = books.shift();
    var newArray = document.getElementById("newArray").innerText=books;

    return myResult;
};
var myNumbers =[1,2,3,4,5,6,7,8,9,10];
var secondArray =[11,12,13,14]
//onsole.log(myNumbers);
myNumbers.slice(6,4);
//console.log(myNumbers);

var result = myNumbers.concat(secondArray);
console.log(result);

// Alphabetically
var mynewArray =["Ann", "William", "Mark", "Tom"];

mynewArray.sort();
mynewArray.reverse();
console.log(mynewArray);

// Numeric
var myNewNumbers =[5,6,9,7,2,3,8,1,3,9,]

myNewNumbers.sort(function(a,b){return a-b});
console.log(myNewNumbers);
myNewNumbers.sort(function(a,b){return b-a});
console.log(myNewNumbers);
/*
function (a,b) {return a-b};
*/

myNewNumbers.forEach(myFunc); //The forEach() method calls a function once for each element in an array, in order.
function myFunc(value, index, array) {
    console.log("Index=> ",index);
    console.log("Value=> ",value);
};
