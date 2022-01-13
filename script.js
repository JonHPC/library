let myLibrary = [];

//placeholder books
const theHobbit = new Book("card0","The Hobbit","JRR Tolkien", true);
addBookToLibrary(theHobbit);

//initialize
displayBooks(myLibrary);

function Book(id,title,author, isRead){
    //Book constructor
    this.id = id || null;
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function(){
    this.isRead = !isRead;
    console.log(`This book is read: ${isRead}`);
}

//This fn is run when the Submit/add new book button is pressed
function inputBook(){
    //Gets the input from the HTML form
    const titleInput = document.getElementById('titleInput').value;
    const authorInput = document.getElementById('authorInput').value;
    
    //creates a new Book object with the input
    if(titleInput == "" || authorInput ==""){
        return;
    }
    const newBook = new Book(`card${myLibrary.length}`,titleInput,authorInput,false);
    
    //Add newBook to the library
    addBookToLibrary(newBook);

    //clears all books from the screen
    clearScreen();
    
    //Display all the books in the current Library
    displayBooks(myLibrary);
    
    //Resets the HTML form
    document.getElementById("bookForm").reset();
    
}

function addBookToLibrary(book){
    //push book object into myLibrary array
    myLibrary.push(book);
}

function clearScreen(){
    //clears all currently displayed cards from the library div
    let currentCards = document.getElementsByClassName('card');

    while(currentCards[0]) {
        currentCards[0].parentNode.removeChild(currentCards[0]);
    }
}



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

        //Creates a button to remove the book from the library
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "X";
        removeBtn.className = "removeBtn";
        removeBtn.id = `removeBtn`;
        document.getElementById(`card${i}`).appendChild(removeBtn);

        //Creates a label to store the toggle switch
        let toggleSwitch = document.createElement("label");
        toggleSwitch.className = "switch";
        toggleSwitch.id = `switch${i}`;
        document.getElementById(`card${i}`).appendChild(toggleSwitch);

        //Creates a checkbox input to go into the toggle switch label
        let readBtn = document.createElement("input");
        readBtn.type = "checkbox";
        readBtn.id = `readBtn${i}`;
        document.getElementById(`switch${i}`).appendChild(readBtn);

        //Creates a slider to make the checkbox button looks like a toggle slider
        let sliderArea = document.createElement("span");
        sliderArea.className = "slider";
        sliderArea.classList.add("round");
        sliderArea.id = `sliderArea${i}`;
        document.getElementById(`switch${i}`).appendChild(sliderArea);

        //updates the toggle slider based on isRead true or false
        if(library[i].isRead){
            check(`readBtn${i}`);
        } else{
            uncheck(`readBtn${i}`);
        }
    }
}

//Adds event listeners to all dynamically created "remove buttons" and "toggle switches"
document.addEventListener('click', function(e){
    if(e.target && e.target.id == 'removeBtn'){
        //gets the id of the card being removed
        let indexToRemove = e.target.parentNode.id;

        //use this index to remove the book object from the library
        myLibrary = myLibrary.filter(x => {
            return x.id != indexToRemove;
        });

        //deletes all the HTML related to this card
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);

    } else if (e.target && e.target.parentNode.className == "switch" && e.target.className == "slider round"){
        //gets the id of the card being worked on
        let index = e.target.parentNode.parentNode.id;

        //Find index of specific object
        let objIndex = myLibrary.findIndex((obj => obj.id == index));

        //Toggle isRead
        if(myLibrary[objIndex].isRead){
            myLibrary[objIndex].isRead = false;
        } else {
            myLibrary[objIndex].isRead = true;
        }


        
    }

    
});

//When run, check the check box/toggle the switch on
function check(readBtn){
    document.getElementById(readBtn).checked = true;
}

//When run, uncheck the check box/toggle the switch off
function uncheck(readBtn){
    document.getElementById(readBtn).checked = false;
}







