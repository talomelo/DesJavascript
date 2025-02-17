class Book {
    constructor(id, title, description, autor) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.autor = autor;
    }
}

class biblioteca {
    constructor() {
        this.books = [];
    }

    // adicionar 
    adiBook(bookInfo) {
        const id = Math.random().toString(36).substr(2, 9); // Gera um ID único
        const newBook = new Book(id, bookInfo.title, bookInfo.description, bookInfo.autor);
        this.books.push(newBook);
        return newBook;
    }

    // Listar todos os livros
    getBooks() {
        return this.books;
    }

    // Remover um livro pelo ID
    removeBookById(id) {
        this.books = this.books.filter(book => book.id !== id);
    }

    // obter um livro pelo ID
    getBookById(id) {
        return this.books.find(book => book.id === id);
    }

    // editar um livro pelo ID
    updateBookById(id, info) {
        const book = this.getBookById(id);
        if (book) {
            if (info.title) book.title = info.title;
            if (info.description) book.description = info.description;
            if (info.autor) book.autor = info.autor;
        }
        return book;
    }
}

// Exemplo d:
const library = new biblioteca();

// Adicionando
library.adiBook({ title: "1984", description: "A dystopian novel", autor: "George Orwell" });
library.adiBook({ title: "To Kill a Mockingbird", description: "A novel about racial injustice", autor: "Harper Lee" });

// Listando
console.log(library.getBooks());

// Obtendo um livro pelo ID
const book = library.getBookById(library.getBooks()[0].id);
console.log(book);

// Editando 
library.updateBookById(book.id, { title: "1984 - Edição Especial" });
console.log(library.getBookById(book.id));

// Removendo 
library.removeBookById(book.id);
console.log(library.getBooks());