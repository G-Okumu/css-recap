/*function data(){
    const dataArray= [];
    for(let i=1;i<=2; i++){
        var name=prompt("Enter student name");
        var age=parseInt(prompt("Enter student age"));
        var grade=parseInt(prompt("Enter student marks"));
        dataArray.push(name, age, grade +'<br>');  
    }
    document.writeln(dataArray)
}
data();*/
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
  });