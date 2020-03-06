function doIt(){
    var myInputValue = document.getElementById("myInput").value;
    var myResult = document.getElementById("result");
    var myInputValue2 = document.getElementById("myInput2").value;
    var myInputValue3 = document.getElementById("myInput3").value;
    var myInputValue4 = document.getElementById("myInput4").value;
    /*var myInputValue4 = 5;
    var myInputValue3 = 3;
    var myInputValue2 = 6;
    var myInputValue = 5;
    var sum = (myInputValue)+(myInputValue2)+(myInputValue3)+(myInputValue4);
    return myResult.innerText = sum;
    */
    var sum = Number(myInputValue)+Number(myInputValue2)+Number(myInputValue3)+Number(myInputValue4);
    return myResult.innerText = sum;

}


