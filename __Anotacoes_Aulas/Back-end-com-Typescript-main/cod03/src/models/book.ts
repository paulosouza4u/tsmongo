import mongoose, { Schema } from "mongoose";
import { IBookDTO } from "../dtos/book.dto";

const BookSchema: Schema = new Schema({
    title: { type: String, require: true },
    author: [
        { type: Schema.Types.ObjectId, ref: 'authors', default: [] }
    ],
    isbn: { type: String, require: true },
    pages: { type: Number, require: true },
    likes: { type: Number, default: 0, },
    description: String,
});

export const BookModel = mongoose.model<IBookDTO>('books', BookSchema);

export class Book {
    private _id: string;
    private _title: string;
    private _author: string;
    private _isbn: string;
    private _pages: number;
    private _likes: number;

    constructor(
        id: string,
        title: string,
        author: string,
        isbn: string,
        pages: number,
        likes: number
    ) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._isbn = isbn;
        this._pages = pages;
        this._likes = likes;
    }

    get id() { return this._id };
    get pages() { return this._pages };
    get likes() { return this._likes };
}