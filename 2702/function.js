

var students = [
    {
        name:"Student1",
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


// Find who passed the exam!

    function pass(students){
        return students.score > 70;
    }
    function getStudentName(students){
        return students.name;
    }
    function whoPassed(myList){
        return myList.filter(pass).map(getStudentName)
    }

    console.log(whoPassed(students));


    function resullttt(myLst){
        return myLst.filter(function(student){
            return student.score >=50
        }).sort(function(a,b){
            return b.score - a.score
        }).map(function(name){
            return 
        })
    }

// Sort students by score! 


/*students.sort(function(){
    return student.sort.((a,b)=>{return a.score-b.score})
}
console.log(students.score); */


/*students.sort(function(myList){
    return myList.filter(pass).sort((a,b)=>{return a.score-b.score}).map(getStudentName)
}
*/
// Array iteration forEach

students.forEach(myFunc);
function myFunc(value, index, array) {
    console.log("Index=> ",index);
    console.log("Value=> ",value);
    console.log("Array=> ",array);
};

// Sort with CompareFunction sort()

