interface Book{
    title: string;
    author: string;
    year: number;
}

const myBook: Readonly<Book> = {
    title: "Brief Answers to the Big Questions",
    author: "Stephen Hawking",
    year: 2018,
}

function printBook(book: Readonly<Book>): void {
    console.log(`
        Book Name: ${book.title}
        Book Author: ${book.author}
        Book Year: ${book.year}
        `);
}
