class Book {
    constructor(bookName, cover){
        this._bookName = bookName;
        this._cover = cover;

    }

    //setters
    getbookName(){
        return this._bookName
    }
    getcover(){
        return this._cover
    }

    //setter    
    setbookName(bookName) {
        this._bookName=bookName;
    }
    setcover(cover) {
        this._cover= cover
    }

    
    getTableRow(){
        let trElem= document.createElement("tr");
        let tdNameElem= document.createElement("td");
        let coverImg=document.createElement('td');
        coverImg.innerHTML= this._cover;
        tdNameElem.innerHTML = this._bookName;
        trElem.append(coverImg);
        trElem.append(tdNameElem);

        return trElem;
    }


}
// '<img src = "images/Flies.jpg">'
//img.src = "images/Flies.jpg";
//books
    let book1 = "Artemis Fowl By Eoin Colfer, genre: fantasy, written in 2001, rated 4 stars";
    let book2 = "The Hound of the Baskervilles By Arthur Conan Doyle, genre crime fiction, mystery, written in 1902, rated 5 stars";
    let book3 = "Lord of the Flies By William Golding, genre: allegory, written in 1954, rated 4 stars";
    let book4 = "THe Hobbit By J.R.R. Tolkien, genre: fantasy, written 1937, rated 3 stars";
    let book5 = "Bobby Fischer Teaches Chess, genre: chess puzzle, written in 1966, reated 3 stars";
    let cover1='<img src = "images/af.jpg">';
    let cover2='<img src = "images/hob.jpg">';
    let cover3 = '<img src = "images/Flies.jpg">';
    let cover4='<img src = "images/hobbit.jpg">';
    let cover5='<img src = "images/chess.jpg">';
    //array
    books = []
    books.push(new Book(book1, cover1));
    books.push(new Book(book2, cover2));
    books.push(new Book(book3,cover3));
    books.push(new Book(book4,cover4));
    books.push(new Book(book5,cover5));


    //created table
let tableElem = document.createElement("table");
// body.append(tableElem);
let contentDiv = document.getElementById("content");
contentDiv.append(tableElem);

for(book of books){
   
    tableElem.append(book.getTableRow());
}


