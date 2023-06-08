let num1;
let num2;

async function addNumbers(){
    num1=parseInt(prompt("Enter num1"));
    num2=parseInt(prompt("Enter num2"));
    document.writeln(num1," ",num2);
   const sum = num1 + num2;
    document.writeln(sum);
}
async function performingAddition(){
    try{
     const result = await addNumbers();
    }catch (error){
        console.error("Error", error);
    }
}
performingAddition();