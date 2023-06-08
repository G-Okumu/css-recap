function sumNumbers (a, b) {
   return a+b;
}

console.log(sumNumbers(2, 3));  // Output: 5
console.log(sumNumbers(10, 15));  // Output: 25
console.log(sumNumbers(-5, 8));  // Output: 3
console.log(sumNumbers(6, 9)); // Output: 15

function callback (){ 
    console.log ("Callback function executed!");
}

function performAsyncOperation(callbackFunction) {
    setTimeout(callbackFunction, 2000);
}

console.log("Start");
performAsyncOperation (callback);
console.log("End");

const students = [
    { name: "John", age: 18, grade: "A" },
    { name: "Sarah", age: 17, grade: "B" },
    { name: "Michael", age: 19, grade: "A+" }
  ];

var books = [
    { title: "Book A", author: "Author A", year: 2005 },
    { title: "Book B", author: "Author B", year: 1998 },
    { title: "Book C", author: "Author C", year: 2010 },
  ];
  
console.log(findEarliestBookTitle(books)); // Output: "Book B"
  
const elements = document.querySelectorAll(".highlight");
elements.forEach(function(element) {
  element.classList.add("bold");
});