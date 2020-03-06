var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
var MyResult = document.getElementById("result");
var count =0;

increment.addEventListener("click", Increment);
decrement.addEventListener("click", Decrement);

function Increment(){
    count++
    console.log(count);
    MyResult.innerText=count;
    console.log("This is Increment");
};
function Decrement(){
    count--
    if(count<0){
        alert("Negative Numbers are Allowed")
    }else {
            console.log(count)
    MyResult.innerText=count;
    console.log("This is Decrement");
        }
    
};