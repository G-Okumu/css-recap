const numberOfBooks = parseInt(prompt("Enter number of books"));


function Library(){
    let libraryArray=[];
    var name
    var author;
    var year;
    for(var i=1; i<= numberOfBooks; i++){
        name = prompt("Enter name of book");
        author = prompt("Enter author's name of this "+ name);
        year = parseInt(prompt("Enter the publish year of this " + name));

        libraryArray.push(name, author, year);
    }
    libraryArray.sort((a,b) =>{
        if(a>b) return 1;
        if(a===b) return 0;
        if(a<b) return -1;
    });
    const largest = libraryArray[1];
    const smallest = libraryArray[libraryArray.length-1];
    document .writeln(name + " This is latest it was published in the year " + smallest);
}
Library();

