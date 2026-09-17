import mongoose, { Document, mongo, Schema } from "mongoose";

export interface IAuthorDTO extends Document {
    name: string;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

const AuthorSchema = new Schema<IAuthorDTO>({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 200,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true
});

AuthorSchema.index(
    { name: 1 },
    { unique: true, partialFilterExpression: { deleteAt: null } }
);

export const AuthorModel = mongoose.model<IAuthorDTO>("authors", AuthorSchema);