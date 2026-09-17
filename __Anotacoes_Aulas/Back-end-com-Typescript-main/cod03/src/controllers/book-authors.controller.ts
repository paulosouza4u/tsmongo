import { Controller, Route, Post, Middlewares, Path, Body, SuccessResponse } from "tsoa";
import { requireAuth, UserRole } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";
import { BookAuthorService } from "../services/book-authors.service";

@Route("books")
export class BookAuthorsController extends Controller {
    
    private _bookAuthorService: BookAuthorService;

    constructor(bookAuthorService: BookAuthorService) {
        super()
        this._bookAuthorService = bookAuthorService;
    }

    @SuccessResponse("200", "OK")
    @Post("{bookId}/authors")
    @Middlewares(requireAuth, requireRole(UserRole.ADMIN))
    public async addAuthor(
        @Path() bookId: string,
        @Body() author: { _id: string }
    ){
        const result = this._bookAuthorService.addAuthor(bookId, author._id);
        return result;
    }
}