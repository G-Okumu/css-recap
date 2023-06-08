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

    let marks = student.map((number)=> number.grade);
    
    let sum=0;

    marks.forEach(grade=>{
        sum += grade/2
    })

    console.log(sum)


 




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


