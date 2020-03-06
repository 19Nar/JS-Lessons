var students =[
    {
       name: "Student1",
       score: 10
    },
    {
        name: "Student2",
        score: 8
     },
     {
        name: "Student3",
        score: 5
     },
     {
        name: "Student4",
        score: 3
     }
    ]
    function pass(student){
        return student.score > 5;
    }
    function getStudentName(student){
        return student.name;
    }
    function whoPassed(myList){
        return myList.filter(pass).map(getStudentName)
    }

    console.log(whoPassed(students));
    // console.log(JSON.stringify(whoPassed(students)));

// testing the difference between JSON.stringify and JSON.parse
    var test1 = JSON.stringify(whoPassed(students));
    var text = '["Student1","Student2"]';
    console.log(typeof(text))
    console.log(typeof(JSON.parse(text)))
    console.log(test1)

    // https://www.w3schools.com/js/js_json.asp

    for (i=0; i<students.length; i++){
        if(students[i].score>5){
        console.log(students[i].name)    
    }
    }
//i is the index number