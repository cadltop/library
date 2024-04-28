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
    
    for (let propertie in myLibrary[myLibrary.length - 1]) {
        const newColumn = document.createElement('td');
        newColumn.textContent = myLibrary[myLibrary.length - 1][propertie];
        newRow.appendChild(newColumn);
    }
    tableContent.appendChild(newRow);
}

function addBookToLibrary(event) {
    let title = document.querySelector('.title-container input').value;
    let author = document.querySelector('.author-container input').value;
    let pages = document.querySelector('.pages-container input').value;
    let read = document.querySelector('.read-container select').value;
    myLibrary.push(new Book(title, author, pages, read));
    event.preventDefault();
}

const newBookBtn = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('.close');
const addBtn = document.querySelector('.add');
const inputs = document.querySelectorAll('div input');

newBookBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeBtn.addEventListener('click', () => {
    dialog.close();
});
addBtn.addEventListener('click', (event) => {
    addBookToLibrary(event);
    dialog.close();
    showBookData();
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}, false);