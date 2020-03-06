// String Methods

var message = "The two words travelling and travelling can cause some confusion for those writers not exactly sure when to use which one. ...";

var myConsole = message.length;
myConsole = message.indexOf("travelling");
myConsole = message.lastIndexOf("cause");
myConsole = message.search("exactly");
console.log(myConsole);

/* the difference between indexOf and search is that you can put the second parameter in indexOf,
 with search you can search regex - powerful search values (regular expressions)
 JavaScript counts positions from zero. First position is 0.
 If a parameter is negative, the position is counted from the end of the string.
 *****
 substring() is similar to slice().
**

The difference is that substring() cannot accept negative indexes.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
https://www.w3schools.com/jsref/jsref_obj_regexp.asp
*/

var ShowInConsole;

ShowInConsole = message.slice(10,30); //slice() extracts a part of a string and returns the extracted part in a new string.
ShowInConsole = message.slice(0,-1);
ShowInConsole = message.slice(9);
ShowInConsole = message.substring(10,25);
ShowInConsole = message.substring(0,-1);
ShowInConsole = message.substr(9,20);
ShowInConsole = message.replace("some","which");
ShowInConsole = message.replace(/[^abc]/g,"for");
ShowInConsole = message.replace(/two/g,"01");
ShowInConsole = message.replace(/and/i,"01"); //To replace case insensitive, use a regular expression with an /i flag (insensitive)
ShowInConsole = message.toUpperCase(); // A string is converted to upper case with toUpperCase()
ShowInConsole = message.toLowerCase(); // A string is converted to lower case with toLowerCase()


message = "Firstname";
ShowInConsole = message.concat("Lastname"); // concat() joins two or more strings:

message = "Firstname";
var myLastName = "Lastname";
ShowInConsole = message.concat(myLastName.trim()); // The trim() method removes whitespace from both sides of a string:

/* The charCodeAt() method returns the unicode of the character at a specified index in a string:
The method returns a UTF-16 code (an integer between 0 and 65535).
*/
message = "some confusion";
ShowInConsole = message.charAt(6);
ShowInConsole = message.charCodeAt(1);


//ECMAScript 5 (2009) allows property access [ ] on strings:
ShowInConsole = message[1];

// A string can be converted to an array with the split() method:
message = "a,b,c,d,e,f";
console.log(typeof(message));
ShowInConsole = message.split(",");
ShowInConsole = message.split("");
console.log(ShowInConsole);

console.log(ShowInConsole);

