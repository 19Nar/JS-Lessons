// Data Types {Array}

var students =["Victoria","Anna","Merlin","Christophe","GuYing","Tim","Giselle","Narine"];

console.log(students.length)

/*Let tempData=[]
tempdata.push("Atilla")
console.log()*/

var myFriends = new Array("Student1","Student1")

// console.log(students[9])


var student = {
    name: "Jack",
    familyname: "Sparrow",
    job: "Seaman",
    country: "England"
};
var student1 = {
    name: "Jack",
    familyname: "Sparrow",
    job: "Seaman",
    country: "England"
};
var student2 = {
    name: "Jack",
    familyname: "Sparrow",
    job: "Seaman",
    country: "England"
};
var student3 = {
    name: "Jack",
    familyname: "Sparrow",
    job: "Seaman",
    country: "England"
};
var myRecords ={

}
    
console.log(student.name, student.familyname, student.job)

// Fuctions

function myFunc (){
    // console.log("this is my first function");

    return "this is a function"
}
console.log(myFunc());

function doSomeCalc (a,b){
var total = a+b;
    console.log(total);
}
doSomeCalc(10,15);

function findBiggestNumber (x,y){
    return x >=y || x<=y ? "true":"false";
}
console.log(findBiggestNumber(10,20));

// Calculate average grades
function studentsGrades (Ani, Mary, Dan) {
    var total =(Ani+Mary+Dan)
    var average =total/3;
    console.log (average);
    return average <=80 ? "high grade": "low grade"; 
    
}
console.log(studentsGrades(68,94));

// Calculate higher grades
function studentsGrades (Ani, Mary) {
    var results = Ani < Mary ? "true": "false";
    return results;
}
console.log(studentsGrades(68,94))

//calculate low grades
function studentsGrades (Ani, Mary) {
    
    return Ani > Mary ? "true": "false";
}
console.log(studentsGrades(68,94))

var data ={
    name: "Ani",
    job: "developer",
    age: "29",
    showData: function(){
        return `
                \nName:${this.name}\nJob:${this.job}\nAge:${this.age}
                `
    }
}
console.log(data.showData())


//Local JavaScript Variables
function Example(){
    var ThisIsLocalVariable = "ThisIsLocalVariable";
    console.log(ThisIsLocalVariable);
}
Example()

function Example1(){ 
}
Example1()

//Global JavaScript Variables

var GlobalVariable ="GlobalVariable"
function Example2(){
    console.log(GlobalVariable);
}
Example2()

function Example3(){
    console.log(GlobalVariable);
}
Example3()


