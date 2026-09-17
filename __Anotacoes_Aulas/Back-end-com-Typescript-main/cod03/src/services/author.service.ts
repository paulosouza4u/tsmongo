import { AuthorInput, AuthorRepository } from "../repositories/authors.repository";

export class AuthorService {
    private _repository: AuthorRepository;
    constructor(repository: AuthorRepository){
        this._repository = repository;
    }

    public async insert(author: AuthorInput) {
        return await this._repository.create(author);
    }
}