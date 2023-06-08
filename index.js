function sum(a, b) {
    return a + b
}

function calculator() {
    return sum(4, 5)
    /*Sum is the callback function */
}





const register = [

    student1 = {
        name: 'Joseph',
        age: 19,
        grade: 80
    },
    student2 = {
        name: 'Steve',
        age: 17,
        grade: 87,
    },
    student3 = {
        name: 'Joe',
        age: 18,
        grade: 90
    },
    student4 = {
        name: 'James',
        age: 16,
        grade: 91
    },


]

function average() {
    sum = 0
    for (let n = 0; n < 4; n++) {
        sum += register[n].grade
    }
    console.log(sum / register.length)


}




const bookRegister = [
    book1 = {
        title: 'Hunger Games',
        author: 'Joseph Karanja',
        year: 2005
    },
    book2 = {
        title: 'Harry Potter',
        author: 'Jon Jones',
        year: 2009
    },
    book3 = {
        title: 'One Punch Man',
        author: 'Liam Alex',
        year: 2010
    },
    book4 = {
        title: 'Shujaaz',
        author: 'Joseph William',
        year: 2001
    }
]

let firstBook = bookRegister[0].year
function bookFinder() {
    for (let n = 0; n < bookRegister.length; n++) {
        if (bookRegister[n].year < firstBook) {
            firstBook = bookRegister[n].year
            firstTitle = bookRegister[n].title
        }
        else {
            firstBook = firstBook
        }
    }
    return console.log(`${firstTitle}`)
}

bookFinder()

