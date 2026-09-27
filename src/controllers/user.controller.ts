import {
    Body,
    Controller,
    Middlewares,
    Post,
    Request,
    Route,
    SuccessResponse,
    Tags,
} from "tsoa";
import type { Request as ExpressRequest } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import type { CreateUserDTO, LoginDTO, LoginResponseDTO, UserResponseDTO } from "../dtos/user.dto";
import { UserService } from "../services/user.service";

@Route("users")
@Tags("Users")
export class UserController extends Controller {
    private readonly userService = new UserService();

    /** Cadastra um usuário e armazena a senha protegida por hash. */
    @Post("register")
    @SuccessResponse("201", "Usuário criado")
    public async register(@Body() body: CreateUserDTO): Promise<UserResponseDTO> {
        const user = await this.userService.register(body);
        this.setStatus(201);
        return user;
    }

    /** Valida as credenciais e retorna um JWT. */
    @Post("login")
    @SuccessResponse("200", "Login realizado")
    public async login(@Body() body: LoginDTO): Promise<LoginResponseDTO> {
        return this.userService.login(body);
    }

    /** Endpoint de teste protegido por JWT. */
    @Middlewares(authenticate)
    @Post("me")
    @SuccessResponse("200", "Usuário autenticado")
    public async me(@Request() request: ExpressRequest) {
        return request.user;
    }
}