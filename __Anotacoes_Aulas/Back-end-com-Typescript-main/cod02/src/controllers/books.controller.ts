import express from "express";
import bookService, { BookService } from "../services/book.service";
import * as bookDto from "../dtos/book.dto";
import { Body, Controller, Middlewares, Path, Post, Query, Request, Route, SuccessResponse } from "tsoa";
import { requireAuth, UserRole } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";
import { BookRepositoryMemory } from "../repositories/books.repository";


@Route("books")
export class BooksController extends Controller  {
    private _bookService: BookService;

    constructor(bookService: BookService = new BookService(new BookRepositoryMemory())) {
        super();
        this._bookService = bookService;
    }

    // public handlerInsert(req: Request, res: Response) {
    //     const body = req.body;
    //     const result = this.insert(body)
    //     res.status(201).json(result);
    // }

    @SuccessResponse("201", "Created")
    @Post()
    @Middlewares(requireAuth, requireRole(UserRole.ADMIN))
    public async insert(
        @Body() body: bookDto.IBookDTO,
    ): Promise<{id: any, message: string}> {
        const result = this._bookService.insert(body);
        this.setStatus(201);
        
        return {
            id: result,
            message: `Livro salvo com sucesso: ID ${result}.`
        };
    }

    // async insert(
    //     @Request() req: express.Request,
    //     @Path() bookId: string,
    //     @Body() body: bookDto.IBookDTO,
    //     @Query() limit?: number
    // ) {

}

export default new BooksController(bookService);