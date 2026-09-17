import { AuthorRepository } from "../repositories/authors.repository"
import { BookRepository } from "../repositories/books.repository"

export class BookAuthorService {

    private _bookRepository: BookRepository;
    private _authorRepository: AuthorRepository;

    constructor(
        bookRepository: BookRepository,
        authorRepository: AuthorRepository
    ) {
        this._bookRepository = bookRepository;
        this._authorRepository = authorRepository;
    }


    async addAuthor(bookId: string, authorId: string) {
        // TODO
        // Pegar Livro por ID
        const book = await this._bookRepository.getById(bookId);
        if (!book) {
            return;
        }
        // Pegar Autor pelo ID
        const author = await this._authorRepository.getActiveById(authorId);
        if (!author) {
            // 
            return;
        }

        // Atualizar Livro com o novo autor
        const result = await this._bookRepository.addAuthor(
            book?._id.toString(), author?._id.toString());


        if (!result) { return; }

        return {
            bookId,
            authorId,
            message: 'Autor associado ao livro com sucesso.'
        };
    }
}