let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    changeRead = function() {
        this.read = (this.read === 'Yes') ? 'No' : 'Yes';
    }
};

function showBookData() {
    const newRow = document.createElement('tr');
    for (let propertie in myLibrary[myLibrary.length - 1]) {
        const newColumn = document.createElement('td');
        switch (propertie) {
            case 'changeRead':
                break;
            case 'read':
                const newColumn1 = document.createElement('td');
                const changeReadBtn = document.createElement('button');
                changeReadBtn.innerHTML = myLibrary[myLibrary.length - 1][propertie];
                changeReadBtn.setAttribute('data-index', `${myLibrary.length - 1}`)
                changeReadBtn.classList.add('change-read');
                newColumn1.appendChild(changeReadBtn);
                newRow.appendChild(newColumn1);

                const newColumn2 = document.createElement('td');
                const deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = "Delete Book";
                deleteBtn.setAttribute('data-index', `${myLibrary.length - 1}`)
                deleteBtn.classList.add('delete-book');
                newColumn2.appendChild(deleteBtn);
                newRow.appendChild(newColumn2);
                break;
            default:
                newColumn.innerHTML = myLibrary[myLibrary.length - 1][propertie];
                newRow.setAttribute('data-index', `${myLibrary.length - 1}`)
                newRow.appendChild(newColumn);
                break;
        }
    }
    tableContent.appendChild(newRow);
}

function addBookToLibrary(event) {
    let save;

    let title = validate(document.querySelector('.title-container input'));
    let author = validate(document.querySelector('.author-container input'));
    let pages = validate(document.querySelector('.pages-container input'));
    let read = validate(document.querySelector('.read-container select'));
    
    if(!save) {
        myLibrary.push(new Book(title, author, pages, read))
    } else {
        alert(save);
    };
    event.preventDefault();

    function validate(element) {
        if(element.checkValidity()){
            return element.value;
        } else {
            save = element.validationMessage;
        }
    }
}

const newBookBtn = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('.close');
const addBtn = document.querySelector('.add');
const inputs = document.querySelectorAll('div input');
const tableContent = document.querySelector('.books tbody');

newBookBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeBtn.addEventListener('click', () => {
    dialog.close();
});
addBtn.addEventListener('click', (event) => {
    addBookToLibrary(event);
    //dialog.close();
    showBookData();
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }

    const changeReadBtnList =  document.querySelectorAll('.change-read');
    const deleteBtnList =  document.querySelectorAll('.delete-book');

    changeReadStatus(changeReadBtnList);
    removeBook(deleteBtnList);
}, false);

function removeBook(deleteBtnList) {
    for (let i = 0; i < deleteBtnList.length; i++) {
        deleteBtnList[i].addEventListener('click', () => {
            const rows = document.querySelectorAll('tbody tr');
            const buttonIndex = deleteBtnList[i].getAttribute('data-index');
            for (let k = 0; k < rows.length; k++) {
                let rowIndex = rows[k].getAttribute('data-index');
                if (rowIndex === buttonIndex) {
                    tableContent.removeChild(rows[k]);
                    delete myLibrary[k]
                    myLibrary = myLibrary.filter(() => {
                        return !undefined
                    });
                }
            }
        });
    };
};

function changeReadStatus(changeReadBtnList) {
    for (let i = 0; i < changeReadBtnList.length; i++) {
        changeReadBtnList[i].addEventListener('click', () => {
            const rows = document.querySelectorAll('tbody tr');
            const buttonIndex = changeReadBtnList[i].getAttribute('data-index');
            for (let k = 0; k < rows.length; k++) {
                let rowIndex = rows[k].getAttribute('data-index');
                if (rowIndex === buttonIndex) {
                    myLibrary[k].changeRead();
                    changeReadBtnList[k].innerHTML = myLibrary[k].read;
                }
            }
        });
    };
}