
/*
Array obj
Prompt
Function

Array = Webdevelopers
Webdevelopers Properties

name
age
web language
country

print them out in console
*/

var firstname = prompt("Enter Firstname");
var surname = prompt("Enter Surname");
var age = prompt("Enter Age");
var webLanguage = prompt("Enter WebLanguage");
var country = prompt("Enter Country");

var Webdevelopers = {
    Firstname: "",
    Surname: "",
    Age: "",
    WebLanguage: "",
    Country: "",
    showWebdevelopers: function(){
        console.log(this.Firstname + "" + this.Surname + "" + this.Age + "" + this.WebLanguage + "" + this.Country);
    }
}
Webdevelopers.Firstname = firstname;
Webdevelopers.Surname = surname;
Webdevelopers.Age = age;
Webdevelopers.Weblanguage = webLanguage;
Webdevelopers.Country = country;

Webdevelopers.showWebdevelopers();
console.log(Webdevelopers);

var showWebdevelopers = "Firstname " + Webdevelopers.Firstname + "\nSurname " + Webdevelopers.Surname + "\nAge " + Webdevelopers.Age + "\nWebLanguage " + Webdevelopers.Weblanguage + "\nCountry " +Webdevelopers.Country; 

console.log(showWebdevelopers);

/*
var Auto = {
    forward:  function(){console.log("Forward")},
    backward: function(){console.log("Backward")},

}
Auto.forward();
Auto.backward();
*/