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
    const title = 'foo';
    const author = 'foo';
    const pages = 'foo';
    const read = 'foo';
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary();
showBookData();

const newBookBtn = document.querySelector('body button');
const dialog = document.querySelector('dialog');
newBookBtn.addEventListener('click', () => {
    dialog.showModal();
});