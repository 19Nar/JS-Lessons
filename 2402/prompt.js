/*
//var UserInput = prompt("say Hello");
//var test = confirm("Hallo");
//document.writrIn(UnerInput);
//console.log(UserInput);

console.log(confirm("This is a true one"));


alert("this is message");

var user = confirm("True or False");
console.log(user);
console.log(typeof(user));

var result = user == true ? "OK":"Cancel";
console.log(result);
*/

//Exercise2

var name = prompt("Enter firstname");
var familyName = prompt("Enter familyname");
var age = prompt("Enter age");

var Student = {
name: "",
lastname:"",
age: "",
showStudent: function(){
    console.log(this.firstname + "" + this.lastname + "" + this.age);
}
}
Student.firstname = name; //array property is equal to promt (var name)
Student.lastname = familyName;  //array property is equal to promt (var familyName)
Student.age = age;   //array property is equal to promt (var age)

Student.showStudent(); //return function
console.log(Student);  //return object
console.log(showStudent);

var showStudent = "Firstname: "+ Student.firstname + "\nLastname: " + Student.lastname + "\nAge: " + Student.age;