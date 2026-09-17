import { IBookDTO } from "../dtos/book.dto";
import { Book } from "../models/book";

export abstract class BookRepository {
    abstract insert(book: IBookDTO): string;
    abstract getById(id: string): Book | null;
}

export class BookRepositoryMemory extends BookRepository {

    books: Book[] = [
        new Book(
            "B001",
            "O Senhor dos Anéis",
            "J.R.R. Tolkien",
            "978-8533613391",
            1216,
            150
        ),
        new Book(
            "B002",
            "1984",
            "George Orwell",
            "978-8535914849",
            328,
            200
        ),
        new Book(
            "B003",
            "Dom Quixote",
            "Miguel de Cervantes",
            "978-8535914849",
            863,
            120
        ),
        new Book(
            "B004",
            "O Pequeno Príncipe",
            "Antoine de Saint-Exupéry",
            "978-8595084747",
            96,
            300
        ),
        new Book(
            "B005",
            "A Arte da Guerra",
            "Sun Tzu",
            "978-8572839046",
            160,
            80
        )
    ];

    insert(book: IBookDTO): string {
        const id = `B${new Date().getTime()}`;
        this.books.push(
            new Book(
                id,
                book.title,
                book.author,
                book.isbn,
                book.pages,
                0
            )
        );
        return id;
    }

    getById(id: string): Book | null {
        return this.books.find(book => book.id == id) ?? null;
    }

}
