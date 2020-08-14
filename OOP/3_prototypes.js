// Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`;
}

// Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instatiate an Object 
const book1 = new Book('Book One', 'Jims Arthor', '2016');
const book2 = new Book('Book Two', 'Alex Bragham', '2020');

console.log(book2);
book2.revise('2022');
console.log(book2);