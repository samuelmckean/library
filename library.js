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

function createForm() {
  // create container element
  const div = document.createElement('div');
  
  // create input elements and set ids
  const title = document.createElement('input');
  title.id = 'title';
  
  const author = document.createElement('input');
  author.id = 'author';

  const numOfPages = document.createElement('input');
  numOfPages.id = 'number-of-pages';

  const read = document.createElement('button');
  read.id = 'read';

  const enter = document.createElement('button');
  enter.id = 'enter';

  // append elements to container
  div.append(title);
  div.append(author);
  div.append(numOfPages);
  div.append(read);
  div.append(enter);
}

// wire up new-book button
document.getElementById('new-book').addEventListener('click', createForm);