/*
var dataflow =5;

function keeper1(a){
    return a;
};
function keeper2(a){
    return a;
};
function keeper3(a){
    return a;
};

var result = keeper3(keeper2(keeper1(dataflow)));
console.log(result);
*/

/*
 {
        name:"Student1", // all in the bracket is an element
        score:22,
    },
*/ 
var students = [ //object/array
    {
        name:"Student1", // a key
        score:22,
    },
    {
        name:"Student2",
        score:65,
    },
    {
        name:"Student3",
        score:23,
    },
    {
        name:"Student4",
        score:88,
    },
    {
        name:"Student5",
        score:37,
    }
    ]
/*
The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array.
*/
    /*students.map(function(value,index,array){
        console.log(value);
        console.log(index);
        console.log(array);

    });*/
/*
The forEach() method calls a function once for each element in an array, in order.

Note: the function is not executed for array elements without values.
*/
    //students.forEach(function(value,index,array){
        //console.log(value)
        //console.log(index);
        //console.log(array);
    //});

    students.filter(function(a){ //to give a name to a parameter is important
        return a.score >=50;
    });

function showEverthinginSingleLine(myList){
    return myList.sort(function(a,b){
        return b.score - a.score
    }).filter(function(student){
        return student.score>=50
    }).map(function (value){
        console.log(value);

    })
};
// 

showEverthinginSingleLine(students);