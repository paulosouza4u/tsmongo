import { AuthorModel, IAuthorDTO } from "../models/author";

export interface AuthorInput {
    name: string,
}

export class AuthorRepository {

    async create(author: AuthorInput): Promise<IAuthorDTO> {
        const newAuthor = new AuthorModel(author);
        return newAuthor.save();
    }

    async getById(id: string): Promise<IAuthorDTO | null>{
        return AuthorModel.findById(id);
    }

    async getActiveById(id: string): Promise<IAuthorDTO | null>{
        return AuthorModel.findOne({ _id: id, deletedAt: null });
    }
}