export interface IBookDTO {
    id: string | null;
    title: string;
    author: string;
    isbn: string;
    pages: number;
    likes: number | null;
}