let newBookBtn = document.getElementById('newBookBtn');
let submitBtn = document.getElementById('submitBtn');
let yourBooksBar = document.getElementById('libraryTable')
let mainContainer = document.getElementById('mainContainer');

let isFormOpen = false; 
let myLibrary = [];

newBookBtn.addEventListener("click", popOutForm);
//submitBtn.addEventListener("click", addNewBook);

let book1 = {
    title: "The Way Of Kings",
    author: "Brandon Sanderson",
    pages: 1007,
    read: true,
};

let book2 = {
    title: "Fools Errand",
    author: "Robin Hobb",
    pages: 592,
    read: false,
};

myLibrary.push(book1, book2);
console.log(myLibrary);

const form = document.querySelector('#myForm')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target.elements);
  const title = e.target.elements.book_title.value
  const author = e.target.elements.book_author.value
  const pages = e.target.elements.book_pages.value
  const read = e.target.elements.book_read.value
  console.log(title, author, pages, read)
  addNewBook(title, author, pages, read);
})


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `The ${this.title} written by ${this.author}, is ${this.pages} pages, ${this.read}`
    };
    console.log(info())
};

function addNewBook(title, author, pages, read) {
    let book = new Book ({

    });
    myLibrary.push(book);
};

function displayLibrary () {
    myLibrary.forEach(function (book) {
        let bookDiv = document.createElement('div');

        bookDiv.textContent = `The ${book.title} by ${book.author}, ${book.pages} pages,
            read: ${book.read}`;
        mainContainer.appendChild(bookDiv);
    });
    // displayLibrary();
};

function popOutForm () {
    isFormOpen = true;
    if (isFormOpen === true) {
        openForm()
    };
};

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

displayLibrary();