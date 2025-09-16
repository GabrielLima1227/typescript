interface Book{
    readonly title: string,
    readonly author: string,
}

let myBook: Book = {
    title: "The Lord of Rings",
    author: "J.R.R. Tolkien",
}

myBook.title = "Harry Potter"
console.log(myBook);
