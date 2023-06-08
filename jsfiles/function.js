// functions syntax

/* function name (){
   anything;
}
*/

function sum (a,b){
    return a+b;
}

// using a callback function

function add (a,b){
     return (a + b + sum(5,5));

}

console.log(add(8,5))



  