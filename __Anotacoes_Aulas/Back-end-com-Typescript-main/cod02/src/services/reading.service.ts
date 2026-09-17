import { ReadBook } from "../models/action";
import { BookRepository } from "../repositories/books.repository"
import UserRepository from "../repositories/users.repository";

class ReadingService {
    protected _userRepository: UserRepository;
    protected _bookRepository: BookRepository;

    constructor(
        userRepository: UserRepository, 
        bookRepository: BookRepository
    ) {
        this._userRepository = userRepository;
        this._bookRepository = bookRepository;
    }

    markABookAsDone(userId: string, bookId: string) {
        const user = this._userRepository.getById(userId);
        const book = this._bookRepository.getById(bookId);
        if (user === null) 
            return [
                    null,
                    false,
                    "Usuário não encontrado."
                ];
        if (book === null)
            return [
                    null,
                    false,
                    "Livro não encontrado."
                ];
        ReadBook.run(user, book);
        // TODO: continuar a implementação
        return [
            user,
            true,
            "Usuário pontuado com sucesso."
        ];
    }
}

export default ReadingService;