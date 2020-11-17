let newBookBtn = document.getElementById('newBookBtn');
let submitBtn = document.getElementById('submitBtn');
let yourBooksBar = document.getElementById('libraryTable')
let mainContainer = document.getElementById('mainContainer');   // not needed I don't think
let isFormOpen = false; 
let myLibrary = [];

newBookBtn.addEventListener("click", popOutForm);
submitBtn.addEventListener("click", addNewBook);

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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    };
};

function popOutForm () {
    isFormOpen = true;
    if (isFormOpen === true) {
        openForm()
    };
};

function addNewBook() {
    // when submit book button is pressed, save all form data to a new object
    // then push the book to the myLibraryArray and then invoke the display Library function
};


function displayLibrary () {
    myLibrary.forEach(function (book) {
        let bookDiv = document.createElement('div');

        bookDiv.textContent = `The ${book.title} by ${book.author}, ${book.pages} pages,
            read: ${book.read}`;
        mainContainer.appendChild(bookDiv);
    });
};


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  
displayLibrary();