// Arrays

let names =[ "Mary","Natalie","Faith", "Nelius"]

let newNames =names.slice(1,2)
newNames.push("Hawa")

//console.log(newNames)
//console.log(names)

// Example on Students

let student = [
          {name: "Hawa",
            age: 16,
            grade: 98},
    
           {
            name:"Faith",
            age:19,
            grade:98
           }

        ]

function gradeSum (a,b){
    return (a+b)/ (student.length);
}

console.log(gradeSum(student[0].grade , student[1].grade))




// Example Books

let books = [
    {
        title:"Homo Deus",
     author:"Yuval Noah Harari",
      year: 2013
     },
    { 
        title:"Vampire Diary",
       author:"Daniel Rotich",
       year: 1990
    }
]

  


function filter(){
   books.sort((a,b) => a.year -b.year)
   console.log(books[0].title)
}

filter(books)


