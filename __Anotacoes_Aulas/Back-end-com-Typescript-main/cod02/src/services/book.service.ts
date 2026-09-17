import { IBookDTO } from "../dtos/book.dto";
import { BookRepository, BookRepositoryMemory } from "../repositories/books.repository";

export class BookService {

    private _bookRepository: BookRepository;

    constructor(bookRepository: BookRepository) {
        this._bookRepository = bookRepository;
    }

    public insert(book: IBookDTO) {
        // TODO: Tratamentos necessários
        const result = this._bookRepository.insert(book);
        // TODO: tratar respostas da persistência
        return result;
    }
}

export default new BookService(new BookRepositoryMemory());