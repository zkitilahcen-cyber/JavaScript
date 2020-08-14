// Object of Protos

const bookProtos ={
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`;
    }
}

// Create Object
// const book1 = Object.create(bookProtos);

// book1.title = 'Book One';
// book1.author = 'John Matheo';
// book1.year = '2018';

const book1 = Object.create(bookProtos, {
    title:{value: 'Book One'},
    author:{value:'John Matheo'},
    year: {value:'2017'}
});


// console.log(`${book1.getSummary()} & ${book1.getAge()}`)