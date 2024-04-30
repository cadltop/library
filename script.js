const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function showBookData() {
    const table1Content = document.querySelector('.books tbody');
    const newRow = document.createElement('tr');
    const table2Content = document.querySelector('.del-btn tbody');
    const deleteBtn = document.createElement('button');

    for (let propertie in myLibrary[myLibrary.length - 1]) {
        const newColumn = document.createElement('td');
        newColumn.textContent = myLibrary[myLibrary.length - 1][propertie];
        newRow.appendChild(newColumn);

    }
    table1Content.appendChild(newRow);
    table1Content.appendChild(deleteBtn);
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