const numberSubjects=parseInt(prompt("Enter Number Of Subjects"));
function Grades(){
    const gradesArray= [];
    for(var i=1; i<=numberSubjects; i++){
        const marks=parseInt(prompt("Enter student Marks"));
        if(marks>=0&&marks<=100){
            gradesArray.push(marks);
        }
    }
    const sum = gradesArray.reduce(function(a,b){
        return a + b;
    });
    const average=sum/numberSubjects
    document.writeln(average);

};
const numberOfStudents = parseInt(prompt("Enter Number of Students"));
const studentArray= [];
 function studentData(){
    for(var j=1; j<=numberOfStudents; j++){
        studentArray.push({
             name:prompt("Enter Name"),
             age:parseInt(prompt("Enter Age")),
             grade:Grades()
        })
    }
    console.log(studentArray);
    document.writeln(studentArray);
 }
 
 studentData();




/*
function data(callback){
    const dataArray= [];
    while(true) {
        var name=prompt("Enter student name");
        if (name.toLowerCase() === "exit"){
            break;
        }
        var age=parseInt(prompt("Enter age for " + name));
        dataArray.push(name,age + "<br>");
        break;
    }
    document.write(dataArray);
    if(typeof callback == "function")
    callback();
  }
    data(function results(){
    const resultsArray= [];
    // filling array with marks
    for(var i=1;i<=5; i++){
        const marks=parseInt(prompt("Enter student marks"));
        if(marks>=0&&marks<=100){
            resultsArray.push(marks);
        }
    }
    document.writeln(resultsArray + "<br>");
    // calculating sum of marks
    const sum = resultsArray.reduce(function(a,b){
        return a + b;
    });
    document.writeln(sum + "<br>");

    const average= sum/5; // getting average
    let grade;
    // calculating grade
    if(average >=80&&average<=100){
        grade = "A";
        document.writeln(grade + "<br>")
    }else if(average >=60&&average<=79){
        grade= "B";
        document.writeln(grade + "<br>")
    }else if(average >=40&&average<=59){
        grade= "C"
        document.writeln(grade + "<br>")
    }else{
        grade= "D"
        document.writeln(grade + "<br>")
    }
  });*/