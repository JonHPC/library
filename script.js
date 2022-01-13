let myLibrary = [];

const newBookBtn = document.getElementById('newBookBtn').addEventListener('click', newBook);

function Book(title,author, pages, isRead){
    //Book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function(){
    console.log("Toggle if book is read");
}

function newBook(){
    //Opens a new form to input a new book
    console.log("Open new book form");
}

function addBookToLibrary(book){
    //push book object into myLibrary array
    myLibrary.push(book);
}

function removeBook(book){
    //Removes this book from the library
    console.log(`Removed ${book} from the library.`)
}

//placeholder books
const theHobbit = new Book("The Hobbit","JRR Tolkien", 903, true);
const harryPotter = new Book("Harry Potter","JK Rowling", 300, false);
const starshipTroopers = new Book("Starship Troopers","Robert Heinlein", 544, true);

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(starshipTroopers);

displayBooks(myLibrary);

function displayBooks(library){
    
    for(let i = 0; i < library.length; i++){

        //Create a new "card" div for each book
        let card = document.createElement('div');
        card.className = "card";
        card.id = `card${i}`;
        document.getElementById('library').appendChild(card);

        //Create the list element for each book in the library
        let list = document.createElement('ul');

        //Adds the "title" value into the list
        const title = document.createElement('li');
        title.classList.add('title');
        title.appendChild(document.createTextNode(library[i].title));
        list.appendChild(title);
        document.getElementById(`card${i}`).appendChild(list);

        //Adds the "author" value into the list
        const author = document.createElement('li');
        author.classList.add('author');
        author.appendChild(document.createTextNode(`by ${library[i].author}`));
        list.appendChild(author);
        document.getElementById(`card${i}`).appendChild(list);

        //Adds the "pages" value into the list
        const pages = document.createElement('li');
        pages.classList.add('pages');
        pages.appendChild(document.createTextNode(`${library[i].pages} pages`));
        list.appendChild(pages);
        document.getElementById(`card${i}`).appendChild(list);

        //Adds the "isRead" value into the list
        const isRead = document.createElement('li');
        isRead.classList.add('isRead');
        isRead.appendChild(document.createTextNode(library[i].isRead));
        list.appendChild(isRead);
        document.getElementById(`card${i}`).appendChild(list);

        //Creates a button to remove the book from the library
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.id = `removeBtn`;
        document.getElementById(`card${i}`).appendChild(removeBtn);

        //Creates a label to store the toggle switch
        let toggleSwitch = document.createElement("label");
        toggleSwitch.className = "switch";
        toggleSwitch.id = `switch${i}`;
        document.getElementById(`card${i}`).appendChild(toggleSwitch);

        //Creates a checkbox input to go into the toggle switch label
        let readBtn = document.createElement("button");
        readBtn.type = "checkbox";
        readBtn.id = `readBtn${i}`;
        document.getElementById(`switch${i}`).appendChild(readBtn);

        //Creates a slider to make the checkbox button looks like a toggle slider
        let sliderArea = document.createElement("span");
        sliderArea.className = "slider";
        sliderArea.classList.add("round");
        sliderArea.id = `sliderArea${i}`;
        document.getElementById(`switch${i}`).appendChild(sliderArea);
    }
    
    
}

document.addEventListener('click', function(e){
    if(e.target && e.target.id == 'removeBtn'){
        console.log("Remove btn pressed");
    }
});








