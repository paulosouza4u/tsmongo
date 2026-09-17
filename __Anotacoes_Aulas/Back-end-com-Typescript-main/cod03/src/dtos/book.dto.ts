import mongoose, { Document } from "mongoose";

export interface IBookDTO extends Document {
    title: string;
    authors: mongoose.Types.ObjectId[];
    isbn: string;
    pages: number;
    likes: number;
}