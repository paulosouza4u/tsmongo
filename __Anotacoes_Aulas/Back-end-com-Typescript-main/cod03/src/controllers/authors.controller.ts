import { Body, Controller, Middlewares, Post, Route, SuccessResponse } from "tsoa";
import { requireAuth, UserRole } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";
import { AuthorRepository, type AuthorInput } from "../repositories/authors.repository";
import { AuthorService } from "../services/author.service";

@Route("authors")
@Middlewares(
    requireAuth, 
    requireRole(UserRole.ADMIN, UserRole.MODERATOR))
export class AuthorsController extends Controller {

    private _authorService: AuthorService;

    constructor(authorService: AuthorService = 
            new AuthorService(new AuthorRepository())) {
        super();
        this._authorService = authorService
    }
    
    @SuccessResponse("201", "Created")
    @Post()
    public async create(@Body() author: AuthorInput){
        const newAuthor = await this._authorService.insert(author);
        this.setStatus(201);
        return newAuthor;
    }

}