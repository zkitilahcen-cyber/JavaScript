// Object literal

const book1 = {
    title: 'Book One',
    author: 'Tomas John',
    year: '2020',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
const book2 = {
    title: 'Book Two',
    author: 'Leo Jane',
    year: '2018',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

    // console.log(book1.getSummary());
    // console.log(Object.values(book1))
    // console.log(Object.keys(book1))