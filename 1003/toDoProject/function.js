

var myUl = document.getElementById("myList");
var myButton = document.getElementById("add");


myEventListeners();


function myEventListeners() {
    myButton.addEventListener("click", todoFunction)
};

function todoFunction(event) {

    event.preventDefault();
    
    var input = document.createElement("input");
    var li = document.createElement("li");

    
    input.type = "text";

    li.append(input)
    myUl.appendChild(li)
};