var myButton = document.getElementById("myBtn");
var username= document.getElementById("username").value;
var password= document.getElementById("password");

var mySecretPassword = 'Naira';


myButton.addEventListener('click',myAuth)

function myAuth(){
    var password = document.getElementById("password").value;
    if(password == mySecretPassword){
        console.log('ok')
    }else{
        console.log('fail')
    }
}