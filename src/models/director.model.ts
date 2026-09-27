import { Document, model, Schema } from "mongoose";

export interface IDirector extends Document {
    name: string;
    biography?: string;
    nationality?: string;
}

const directorSchema = new Schema<IDirector>(
    {
        name: { type: String, required: true, trim: true },
        biography: { type: String, trim: true },
        nationality: { type: String, trim: true },
    },
    { timestamps: true }
);

export const DirectorModel = model<IDirector>("Director", directorSchema);