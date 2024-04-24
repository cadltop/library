const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function showBookData() {
    const tableContent = document.querySelector('tbody');
    const newRow = document.createElement('tr');
    
    for (let propertie in myLibrary[0]) {
        const newColumn = document.createElement('td');
        newColumn.textContent = myLibrary[0][propertie];
        newRow.appendChild(newColumn);
    }
    tableContent.appendChild(newRow);
}

function addBookToLibrary() {
    const title = prompt("Title", '');
    const author = prompt("Author", '');
    const pages = prompt("Pages", '');
    const read = prompt("Read", '');
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary();
showBookData();