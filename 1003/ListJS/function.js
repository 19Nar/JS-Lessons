
/*var iContainer = document.createElement("div");
iContainer.className = "container-fluid";

var iRow = document.createElement("div");
iRow.className = "row";

var iCol = document.createElement("div");
iCol.className = "col-xs-12 col-sm-12 col-md-12";
*/

var iTable = document.createElement("div");
iTable.className = "table";

var iTr = document.createElement("tr");

var iFirstName = document.createElement("th");
var firstName = document.createTextNode("Firstname");
var iLastName = document.createElement("th");
var lastName = document.createTextNode("Lastname");
var iAge = document.createElement("th");
var age= document.createTextNode("Age");

var iTr1 = document.createElement("tr");

var iAni = document.createElement("td");
var ani = document.createTextNode("Ani");
var iSmith = document.createElement("td");
var smith= document.createTextNode("Smith");
var iAgeAni = document.createElement("td");
var ageAni= document.createTextNode("25");

var iTr2 = document.createElement("tr");

var iTom = document.createElement("td");
var tom = document.createTextNode("Tom");
var iClinton = document.createElement("td");
var clinton= document.createTextNode("Clinton");
var iAgeTom = document.createElement("td");
var ageTom= document.createTextNode("26");




//iContainer.appendChild(iRow);
//iRow.appendChild(iCol);

iTable.appendChild(iTr);
iTable.appendChild(iTr1);
iTable.appendChild(iTr2);

iTr.appendChild(iFirstName);
iFirstName.appendChild(firstName);
iTr.appendChild(iLastName);
iLastName.appendChild(lastName);
iTr.appendChild(iAge);
iAge.appendChild(age);
console.log(iTr)


iTr1.appendChild(iAni);
iAni.appendChild(ani);
iTr1.appendChild(iSmith);
iSmith.appendChild(smith);
iTr1.appendChild(iAgeAni);
iAgeAni.appendChild(ageAni);
console.log(iTr1)


iTr2.appendChild(iTom);
iTom.appendChild(tom);
iTr2.appendChild(iClinton);
iClinton.appendChild(clinton);
iTr2.appendChild(iAgeTom);
iAgeTom.appendChild(ageTom);
console.log(iTr2)

document.body.appendChild(iTable);
console.log(iTable);

