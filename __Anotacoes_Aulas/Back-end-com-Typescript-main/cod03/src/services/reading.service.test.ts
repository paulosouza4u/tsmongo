import { describe, expect, test } from "@jest/globals";
import ReadingService from "./reading.service";
import UserRepository from "../repositories/users.repository";
import { User } from "../models/user";
import { BookRepository } from "../repositories/books.repository";
import { Book } from "../models/book";
import { IBookDTO } from "../dtos/book.dto";

// UserRepositoryMongoDB

class UserRepositoryFake extends UserRepository {
    getById(id: string): User | null {
        return [
            new User("0xp", "", "", "", 0),
            new User("100xp", "", "", "", 100),
        ].find(u => u.id === id) ?? null;
    }
}

class BookRepositoryFake extends BookRepository {
    getAll(): Promise<IBookDTO[]> {
        throw new Error("Method not implemented.");
    }

    async insert(book: IBookDTO): Promise<string | undefined> {
        return "";
    }

    getById(id: string): Book | null {
        return [
            new Book("100pg", "", "", "", 100, 0),
            new Book("1000pg", "", "", "", 1000, 0),
        ].find(b => b.id === id) ?? null;
    }  
}


describe("Reading Services", () => {
    test("Deve retornar 10 para usuário com 0xp tendo lido livro com 100 pg", () => {
        const readingService = new ReadingService(
            new UserRepositoryFake(),
            new BookRepositoryFake(),
        );

        const [user, result, message] = readingService.markABookAsDone("0xp", "100pg");

        expect(user).toBeDefined();
        expect((user as User).totalXP).toBe(10);
        expect(result).toBeTruthy();
        expect(message).toBe("Usuário pontuado com sucesso.");

    });

    test("Deve retornar 200 para usuário com 100xp tendo lido livro com 1000 pg", () => {
        const readingService = new ReadingService(
            new UserRepositoryFake(),
            new BookRepositoryFake(),
        );

        const [user, result, message] = readingService.markABookAsDone("100xp", "1000pg");

        expect(user).toBeDefined();
        expect((user as User).totalXP).toBe(200);
        expect(result).toBeTruthy();
        expect(message).toBe("Usuário pontuado com sucesso.");

    });

});