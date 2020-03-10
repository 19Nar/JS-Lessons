

var myHtmlElement = document.createElement("div");
myHtmlElement.className="container";

var row = document.createElement("div");
row.className = "row";

var col = document.createElement("div");
col.className = "col-xs-12 col-sm-12 col-md-12";


var myMessage = document.createTextNode("This is Text Node");


row.appendChild(col);
row.appendChild(myMessage);
myHtmlElement.appendChild(row);

document.body.appendChild(myHtmlElement);
console.log(myHtmlElement);

