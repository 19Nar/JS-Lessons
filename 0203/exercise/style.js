var myButton = document.getElementById("myBtn");
var username= document.getElementById("username").value;
var password= document.getElementById("password").value;

var ContactList =[];

/*
function addList(){
    var username= document.getElementById("username").value;
    console.log(username);
    ContactList.push(username);

    var password= document.getElementById("password").value;
    console.log(password);
    ContactList.push(password)
};
*/

    function addList(){
    var username= document.getElementById("username").value;
    //console.log(username);

    var password= document.getElementById("password").value;
    console.log(username, password);
    ContactList.push(username,password);
};

/*function addList() {
    var temp = []
    temp.push({
        "username": username.value,
        "password": password.value
    })
    ContactList.push(temp);
    console.log(ContactList);
};
*/
myButton.addEventListener("click", addList);

/*ContactList.forEach(
    (Username)=>{
    console.log(Username)}
);
ContactList.forEach(
    (Password)=>{
    console.log(Password)}
);*/

ContactList.forEach(
    (Username, Password)=>{
    console.log(Username, Password)}
);


function myFunction() {
    var password= document.getElementById("password").value;
    if (password === "Naira") {
        
        console.log("right")
    } else {
        
        console.log("wrong")
    }

};
console.log(ContactList);