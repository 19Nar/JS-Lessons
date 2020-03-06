// switchStatement
//Use the switch statement to select one of many code blocks to be executed.


var number = 5;
switch(number){
case 0:
console.log("0");
case 3:
console.log("3");
case 5:
console.log("5 is correct");
break;
default:
    console.log("default")
};

var myDay =new Date();
    console.log();
    switch(myday.getDay()){
        case 0:
            console.log("Sunday");
            break;
        case 0:
            console.log("Monday");
            break;
        case 1:
            console.log("Tuesday");
            break;                          /* When JavaScript reaches a break keyword, it breaks out of the switch block.
        case 2:                              This will stop the execution of inside the block.*/ 
            console.log("Wednesday");
            break;
        case 3:
            console.log("Thursday");
            break;      
        case 4:
            console.log("Friday");
            break;
        case 5:
            console.log("Saturday");
            break;
        default:                            // The default keyword specifies the code to run if there is no case match:
            console.log("default")    

    };


