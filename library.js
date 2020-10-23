let myLibrary = [];

function Book(title, author, numOfPages, read) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function addBookToLibrary() {
  // get data from entry fields
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const numOfPages = document.getElementById('number-of-pages').value;
  const read = document.getElementById('read').value;

  // create book object
  book = Book(title, author, numOfPages, read);

  // add book to myLibrary
  myLibrary.push(book);
}

function displayBooks(books) {
  for (let book in books) {
    console.log(book);
  }
}

// wire up new-book button
document.getElementById('new-book').addEventListener('click', addBookToLibrary);