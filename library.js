let newBookBtn = document.getElementById('newBookBtn');
let submitBtn = document.getElementById('submitBtn');
let closeBtn = document.getElementById('closeBtn');
let yourBooksBar = document.getElementById('libraryTable')
let mainContainer = document.getElementById('mainContainer');
let books = document.getElementById('books');

let isFormOpen = false; 
let myLibrary = [];

const form = document.querySelector('#myForm')

form.addEventListener('submit', (e) => {
  e.preventDefault();   // stops page reloading due to it being a form submission
  console.log(e.target.elements);
  const title = e.target.elements.book_title.value;
  const author = e.target.elements.book_author.value;
  const pages = e.target.elements.book_pages.value;
  const read = e.target.elements.book_read.value;
  console.log(title, author, pages, read);
  addNewBook(title, author, pages, read);
  clearLibrary();
  displayLibrary();
});
newBookBtn.addEventListener("click", toggleForm);
closeBtn.addEventListener("click", closeForm);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
};


function addNewBook(title, author, pages, read) {
    let book = new Book (title, author, pages, read);
    myLibrary.push(book);
};


function displayLibrary () {

    myLibrary.forEach(function(book) {
        let bookDiv = document.createElement('div');
        let delBook = document.createElement('button');
        
        bookDiv.dataset.bookTitle = book.title;


        bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages,
            read: ${book.read}`;
        books.appendChild(bookDiv);


        bookDiv.appendChild(delBook);
        delBook.addEventListener("click", removeBook);
        delBook.textContent = "Delete";
        console.log(myLibrary)
    });
};

function removeBook (e) {

    let parentDiv = e.target.parentNode;
    //parentDiv.remove();

    parentDiv.dataset.bookTitle;

    
    console.log(parentDiv)
    console.log(parentDiv.dataset.bookTitle);
    console.log(e)
    console.log(e.target)
};


function clearLibrary() {
    books.innerHTML = '';
};


function toggleForm () {
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    };
};


function closeForm() {
    console.log("Close Button was pressed")
    form.style.display = "none";
};

