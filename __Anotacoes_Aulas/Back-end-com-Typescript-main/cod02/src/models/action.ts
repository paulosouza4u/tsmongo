import { Book } from "./book";
import { User } from "./user";

abstract class Action {
    static run(user: User, book: Book): void {}; 
}

export class ReadBook extends Action {
    static run(user: User, book: Book): void {
        const xp = book.pages * 0.1;
        user.addXP(xp);
    }
}

export class CommentBook extends Action {
    static run(user: User, book: Book): void {
        const xp = book.likes < 1000 ? 100 : 200;
        user.addXP(xp);
    }
}