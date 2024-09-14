class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this._isbn = isbn;
        this.available = true;
    }

    get isbn() {
        return this._isbn;
    }

    borrowBook() {
        if (this.available) {
            this.available = false;
            console.log(`${this.title} has been borrowed`)
        } else {
            console.log(`${this.title} can't be borrowed`);
        }
    }

    returnTheBook() {
        this.available = true;
        console.log(`${this.title} has been return`)
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} is added to the library`)
    }

    removeBook(isbn) {
        const index = this.books.findIndex(book => book.isbn === isbn);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)
            console.log(`${removedBook[0].title} has been removed from the library`)
        } else {
            console.log(`No book found with ISBN: ${isbn}`);
        }
    }

    findBookByTitle(title) {
        const book = this.books.find(book => book.title === title);
        return book ? book : `No book found with title: ${title}`
    }
}

class DigitalLibrary extends Library {
    downloadBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            if (book.available) {
                console.log(`Downloading ${book.title}...`)
            } else {
                console.log(`${book.title} is not available for download`)
            }
        }
    }
}

//code to create the new book
const book1 = new Book("Nigeria the gaint of africa", "Akinsonwn", "123456789")
const book2 = new Book("1984", "George Orwell", "987654321")
const book3 = new Book("Past presidnets", "Juwon Ese", "111213141")

// Creating an instance of the Library class

const library = new Library();

// Testing the addBook method
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)

// code to remove book
library.removeBook("123456789") 

// code to find book
console.log(library.findBookByTitle("Nigeria the gaint of africa"))

