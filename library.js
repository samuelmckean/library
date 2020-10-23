let myLibrary = [];

function storageAvailable(type) {
  // checks if local storage is available
  // taken from MDN (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  // storage is available so check if myLibrary already stored
  if (localStorage.getItem('myLibrary') !== null) {
    storageData = JSON.parse(localStorage.getItem('myLibrary'));
    for (let book of storageData) {
      myLibrary.push(new Book(book.title, book.author, book.numOfPages, book.read));
    }
  }
}

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

  // add html elements to card and return
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

  // update storage if necessary
  if (storageAvailable('localStorage')) {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }
}

function displayBooks(books) {
  // creates a div container to hold cards for each book and appends to root element
  const div = document.createElement('div');
  div.id = 'books';
  for (let book of books) {
    console.log(typeof(book));
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