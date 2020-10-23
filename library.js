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

  // return to list of books
  
  root.replaceChildren()
}

function displayBooks(books) {
  for (let book in books) {
    console.log(book);
  }
}

function createForm() {
  // create container element
  const div = document.createElement('div');
  div.id = 'form';
  
  // create input elements and set ids
  const title = document.createElement('input');
  title.id = 'title';
  title.type = 'text';
  title.placeholder = 'Title';
  
  const author = document.createElement('input');
  author.id = 'author';
  author.type = 'text';
  author.placeholder = 'Author';

  const numOfPages = document.createElement('input');
  numOfPages.id = 'number-of-pages';
  numOfPages.type = 'number';
  numOfPages.placeholder = '0';

  const read = document.createElement('input');
  read.id = 'read';
  read.type = 'checkbox';

  const enter = document.createElement('button');
  enter.id = 'enter';
  enter.innerHTML = 'Submit';
  enter.addEventListener('click', addBookToLibrary);

  // append elements to container
  div.append(title, author, numOfPages, read, enter);
  root.replaceChildren(div);
}

// wire up new-book button
document.getElementById('new-book').addEventListener('click', createForm);

// create var for root element
const root = document.getElementById('root');