import { IBookDTO } from "../dtos/book.dto";
import { Book, BookModel } from "../models/book";

export abstract class BookRepository {
    abstract getAll(): Promise<IBookDTO[]>;
    abstract insert(book: IBookDTO): Promise<string | undefined>;
    abstract getById(id: string): Promise<IBookDTO | null>;
    abstract addAuthor(bookId: string, authorId: string): Promise<boolean>
}

export class BookRepositoryMongo extends BookRepository {

    async getAll(): Promise<IBookDTO[]> {
        return await BookModel.find();
    }

    async insert(book: IBookDTO): Promise<string | undefined> {
        const newBook = new BookModel(book);
        const saved = await newBook.save();
        return saved._id?.toString();
    }
    
    async getById(id: string): Promise<IBookDTO | null> {
        return await BookModel.findById(id);
    }

    async addAuthor(bookId: string, authorId: string): Promise<boolean> {
        const result = await BookModel.updateOne(
            { _id: bookId },
            { $addToSet: { authors: authorId } }
        );
        return result.modifiedCount > 0;
    }
    
}

// export class BookRepositoryMemory extends BookRepository {

//     books: Book[] = [
//         new Book(
//             "B001",
//             "O Senhor dos Anéis",
//             "J.R.R. Tolkien",
//             "978-8533613391",
//             1216,
//             150
//         ),
//         new Book(
//             "B002",
//             "1984",
//             "George Orwell",
//             "978-8535914849",
//             328,
//             200
//         ),
//         new Book(
//             "B003",
//             "Dom Quixote",
//             "Miguel de Cervantes",
//             "978-8535914849",
//             863,
//             120
//         ),
//         new Book(
//             "B004",
//             "O Pequeno Príncipe",
//             "Antoine de Saint-Exupéry",
//             "978-8595084747",
//             96,
//             300
//         ),
//         new Book(
//             "B005",
//             "A Arte da Guerra",
//             "Sun Tzu",
//             "978-8572839046",
//             160,
//             80
//         )
//     ];

//     insert(book: IBookDTO): string {
//         const id = `B${new Date().getTime()}`;
//         this.books.push(
//             new Book(
//                 id,
//                 book.title,
//                 book.author,
//                 book.isbn,
//                 book.pages,
//                 0
//             )
//         );
//         return id;
//     }

//     getById(id: string): Book | null {
//         return this.books.find(book => book.id == id) ?? null;
//     }

// }
