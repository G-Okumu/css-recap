//Create an array of student objects, where each object represents a student with properties like name, age, and grade. 
//Write a function that accepts the student array and returns the average grade of all students.

let students =[
    {
    firstname:"sasha",
    age:20,
    grade:70
    },
    {
        firstname:"Brian",
        age:22,
        grade:75
    },
    {
        firstname:"Lenaiayasa",
        age:21,
        grade:79
    }
]


function average()
{
 const avg = (students[0].grade + students[1].grade + students[2].grade)/students.length;
    return avg

}
let studentsaverage=average() // declaring a variable to hold the called function
 console.log(studentsaverage)

// Given an array of objects representing books with properties like title,
//  author, and year, write a function that finds the book with the earliest
//   publication year and returns its title.

let books = [
    {
      title: "Home",
      author: "Luther",
      year: 2001,
    },
    {
      title: "About Me",
      author: "Lurer",
      year: 2002,
    },
    {
      title: "Marp",
      author: "Potter",
      year: 2003,
    },
    {
      title: "Marp",
      author: "Potter",
      year: 2004,
    }
]
// Create a function Earliest Year
function earliestYear() {
  // Loop through each book in array
for (let i = 0; i < books.length; i++) {
  let leastYear = books[i].year;
// Check Condition
  if (leastYear <= 2001) {
    console.log(books[0].title);
  }
}
}
earliestYear(); // calling the function tobe returned
