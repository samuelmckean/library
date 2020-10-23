let myLibrary = [];

function Book(title, author, numOfPages, read) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

Book.prototype.createBookElement = function() {
  // create container for book info
  const card = document.createElement('div');
  card.className = 'card';

  // create elements for all the properties of a book
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = this.title;

  const author = document.createElement('h2');
  author.id = 'author';
  author.innerHTML = this.author;

  const numOfPages = document.createElement('p');
  numOfPages.id = 'number-of-pages';
  numOfPages.innerHTML = this.numOfPages + ' pages';

  const read = document.createElement('p');
  read.id = 'read';
  if (this.read === 'on') {
    read.innerHTML = 'Read';
  } else {
    read.innerHTML = 'Not Read';
  }

  card.append(title, author, numOfPages, read);

  return card;
}

function addBookToLibrary() {
  // get data from entry fields
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const numOfPages = document.getElementById('number-of-pages').value;
  const read = document.getElementById('read').value;

  // create book object
  book = new Book(title, author, numOfPages, read);

  // add book to myLibrary
  myLibrary.push(book);

  // return to list of books
  displayBooks(myLibrary);
}

function displayBooks(books) {
  // creates a div container to hold cards for each book and appends to root element
  const div = document.createElement('div');
  div.id = 'books';
  for (let book of books) {
    div.append(book.createBookElement());
  }
  root.replaceChildren(div);

  // add New Book button back
  root.appendChild(newBookButton);
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
const newBookButton = document.getElementById('new-book')
newBookButton.addEventListener('click', createForm);

// create var for root element
const root = document.getElementById('root');