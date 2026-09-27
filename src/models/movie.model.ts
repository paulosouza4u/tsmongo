import { Document, model, Schema, Types } from "mongoose";

export interface IMovie extends Document {
    title: string;
    synopsis?: string;
    releaseYear: number;
    genre: string;
    director: Types.ObjectId;
}

const movieSchema = new Schema<IMovie>(
    {
        title: { type: String, required: true, trim: true },
        synopsis: { type: String, trim: true },
        releaseYear: { type: Number, required: true, min: 1888 },
        genre: { type: String, required: true, trim: true },
        director: { type: Schema.Types.ObjectId, ref: "Director", required: true },
    },
    { timestamps: true }
);

export const MovieModel = model<IMovie>("Movie", movieSchema);