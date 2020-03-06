

function myFunction(a,b){

    return a+b;

};
console.log(myFunction(1,1));

var ThisIsFunction = myFunction(2,3);
console.log(ThisIsFunction);

// An example of Global and Local Variables
var yourAge = 29; //Global Variavle
function showAge(yourAge){

    return yourAge; //Local Variable

};

var showOnSite = showAge(29);
console.log("I am " +showOnSite + " years old."); //Local Variable
console.log("I am " +yourAge + " years old."); //Global Variable

var x ="Global Variable";
function myFunction1(){
   var x= "Local Variable";
    console.log(x)
}

function myFunction2(){
    var x= "Global Variable has been Updated";
    console.log(x)
}

myFunction1()
myFunction2()

// Function with One Parameter 

//console.log(greeting("Atilla")); // print out

//"Hello Atilla, Welcome to MY Page!"

var greeting;

function showData(name, age){

    var greeting = age;
    return "I am " + name + " and I am " + age + " years old, hello, you are welcome to my page!"
}

console.log(showData("Narine",39));

