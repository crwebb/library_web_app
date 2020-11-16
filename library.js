let addBookBtn = document.getElementById('addBookBtn');
let libraryTable = document.getElementById('libraryTable')
let myLibrary = [];

addBookBtn.addEventListener("click", addBookToLibrary)

let book1 = {
    title: "The Way Of Kings",
    author: "Brandon Sanderson",
    pages: 1007,
    read: true
};

let book2 = {
    title: "Fools Errand",
    author: "Robin Hobb",
    pages: 592,
    read: false
};

myLibrary.push(book1, book2);
console.log(myLibrary);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {
    console.log('Add Book Button was pressed')
};

function displayLibrary () {
    for (let i = 0; i < myLibrary.length; i++) {
        libraryTable.appendChild
    };
};

displayLibrary();