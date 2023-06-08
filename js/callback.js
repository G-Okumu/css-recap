const numbers = [];
   function addNumbers(){
    
    for(var i=1; i<=2; i++){
        const Values=parseInt(prompt("Enter the two numbers"));
        numbers.push(Values);
    }
    summation(numbers);
   }
   function summation(){
    const sum=numbers.reduce(function(a,b){
        return a + b;
    });
    document.writeln(sum);
   }
   addNumbers();