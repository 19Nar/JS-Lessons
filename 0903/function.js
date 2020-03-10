/*
JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
*/

/*
The DOM is a W3C (World Wide Web Consortium) standard.

The DOM defines a standard for accessing documents:

"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
*/

//Core DOM - standard model for all document types

//The document object represents your web page.

//If you want to access any element in an HTML page, you always start with accessing the document object.


var message = "Hallo Dom!";

var myApp = document.getElementById("app");


myApp.firstElementChild
myApp.firstChild.textContent="tst"

myApp.lastChild.previousElementSibling

console.log(myApp.firstChild);
console.log(myApp.lastChild);

//In the example above, getElementById is a method, while innerHTML is a property.
//The innerHTML property can be used to get or change any HTML element, including <html> and <body>.

//You should not use cost and let for hoisting

//HTML DOM appendChild() Method

//var button =document.getElementsByTagName("button");

var h1 = document.getElementById("test");
h1.setAttribute("class","btn btn-primary"); // class is an attribute type

/*
var link = document.getElementById("link");
link.setAttribute("href", "https://google.com", "btn btn-primary");

*/

//The getElementsByTagName() method returns a collection of an elements's child elements with the specified tag name, as a NodeList object.


//The setAttribute() method adds the specified attribute to an element, and gives it the specified value.

var a = document.getElementById("link");
a.setAttribute("href", "https://google.com");

console.log(h1.nodeName);           //result - h1
console.log(myApp.nodeName);        //result - div

var FindElement = document.getElementsByTagName("h1");

typeof FindElement;

console.log(FindElement);

/* The outerHTML property sets or returns the HTML element and all it's content, including the start tag, it's attributes, and the end tag.

The innerHTML property sets or returns the HTML content (inner HTML) of an element.

The removeAttribute() method removes the specified attribute from an element. For example - document.getElementsByTagName("H1")[0].removeAttribute("class");

You can use the getAttribute() method to return the value of an attribute of an element.  */



var FindMyElementByClassName = document.getElementsByClassName("test")
console.log(FindMyElementByClassName);



var newParagraph = document.createElement("p");
newParagraph.textContent = "Lorem ipsum";
//myApp is a div element

myApp.appendChild(newParagraph);


var myList = document.getElementById("myList");
var btn = document.getElementById("btn");


btn.addEventListener("click", removeFunction);

function removeFunction(){

myList.removeChild(myList.firstElementChild)
//myList.removeChild(myList.lastElementChild)

};