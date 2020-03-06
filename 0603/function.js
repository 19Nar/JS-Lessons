
/*

for - loops through a block of code a number of times
for/in - loops through the properties of an object

Parameter Values

var	Required. A variable that iterates over the properties of an object
object	Required. The specified object that will be iterated

*/

var people = {
    name:"Jack",
    age:29
};

var mykey;
for (myKey in people) {

    console.log(people[myKey])
};

var students = [
    {
        name:"Jackie",
    age:30
    },

    {
        name:"Jack",
    age:29
    }
]

for (myKey in students) {

    console.log(students[myKey])

    //console.log(students[myKey].age)
    //console.log(students[myKey].name)
};

// for/of - loops through the values of an iterable object

for (myKey of students) {

    console.log(myKey)
    console.log(myKey.age)
    console.log(myKey.name)
};

// while - loops through a block of code while a specified condition is true
// do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

var i = 0    //First, we set a variable before the loop starts (var i = 0;)
while (i<students.length) {     ////Then, we define the condition for the loop to run. As long as the variable is less than the length of the array (which is 2), the loop will continue

    // students.length => 2

    console.log(students[i].name)
    console.log(students[i].name)
    i++  //0, 1                        // Each time the loop executes, the variable is incremented by one (i++)

};          //Once the variable is no longer less than 2 (array's length), the condition is false, and the loop will end

while (i<100) {
    i++;
    if(i%2==0){         
      console.log(i)  
    }
};