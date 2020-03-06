
var answer
var result=0;

while(answer%2!=0) {

    answer = prompt("Enter the number:");
    result += parseInt(answer);
}

result = answer;
document.write(parseInt(answer));

/* The do/while loop is a variant of the while loop. 
This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. */

do {
myFunction();
}while(condition);

// Examples
// The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

var text = ""
var i = 0;
do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);

  document.getElementById("demo").innerHTML = text;

  /*
  
 The syntax of the do-while loop:
 do{
  statement(s);
} while(expression);

  */