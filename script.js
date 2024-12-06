const myLibrary = [];
const libraryDisplay = document.querySelector(".library");
const addBookDialog = document.querySelector("#addBookDialog");
const addButton = document.querySelector("#showDialog");
const confirmButton = document.querySelector("#confirmBtn");
const outputBox = document.querySelector("output");
const newBookTitle = document.querySelector("#newBookTitle");
const newBookAuthor = document.querySelector("#newBookAuthor");
const newBookPagesCount = document.querySelector("#newBookPagesCount");
const newBookDidRead = document.querySelector("#newBookDidRead");

addButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    let book = new Book(newBookTitle.value, newBookAuthor.value, newBookPagesCount.value, newBookDidRead.value);
    book.addBookToLibrary();
    displayLibrary();
    addBookDialog.close();
});

// function Book(title, author, pagesCount, didRead) {
//     this.title = title;
//     this.author = author;
//     this.pagesCount = pagesCount;
//     this.didRead = didRead;
// }

class Book {
    constructor(title, author, pagesCount, didRead) {
        this.title = title;
        this.author = author;
        this.pagesCount = pagesCount;
        this.didRead = didRead;
    }

    addBookToLibrary() {
        myLibrary.push(this);
    }
}

const book1 = new Book("Harry Potter", "J. K. Rowling", 457, true);
const book2 = new Book("Game of Thrones", "George R. R. Martin", 691, false);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzegarld", 255, true);
const book4 = new Book("The Shining", "Steven King", 531, false);

// function addBookToLibrary(book) {
//     myLibrary.push(book);
// }

function displayLibrary() {
    libraryDisplay.innerHTML = "";

    for (let book of myLibrary) {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        let bookCardButtons = document.createElement("div");
        bookCardButtons.classList.add("book-card-buttons");

        let title = document.createElement("h3");
        let author = document.createElement("h4");
        let pagesCount = document.createElement("p");
        let didRead = document.createElement("p");
        let removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        let toggleDidReadButton = document.createElement("button");
        toggleDidReadButton.classList.add("toggle-didRead-button");

        bookCardButtons.append(removeButton, toggleDidReadButton);

        removeButton.addEventListener("click", () => {
            let index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            displayLibrary();
        })

        toggleDidReadButton.addEventListener("click", () => {
            book.didRead = !book.didRead;
            displayLibrary();
        })

        title.textContent = book.title;
        author.textContent = "by " + book.author;
        pagesCount.textContent = book.pagesCount + " pages";
        didRead = book.didRead ? "Have read already" : "Haven't read yet";
        removeButton.textContent = "Remove book";
        toggleDidReadButton.textContent = book.didRead ? "Change to haven't read" : "Change to read";

        bookCard.append(title, author, pagesCount, didRead, bookCardButtons);
        libraryDisplay.append(bookCard);
    }
}

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);
// addBookToLibrary(book4);
book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();
book4.addBookToLibrary();
console.log(myLibrary);
displayLibrary();