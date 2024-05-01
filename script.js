const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function showBookData() {
    const tableContent1 = document.querySelector('.books tbody');
    const newRow1 = document.createElement('tr');
    const tableContent2 = document.querySelector('.del-btn');
    const newRow2 = document.createElement('tr');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete Book"

    for (let propertie in myLibrary[myLibrary.length - 1]) {
        const newColumn1 = document.createElement('td');
        newColumn1.textContent = myLibrary[myLibrary.length - 1][propertie];
        newRow1.appendChild(newColumn1);
        if (propertie === 'read') {
            const newColumn2 = document.createElement('td');
            newColumn2.appendChild(deleteBtn);
            newRow2.appendChild(newColumn2);
        }
    }

    tableContent1.appendChild(newRow1);
    tableContent2.appendChild(newRow2);
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