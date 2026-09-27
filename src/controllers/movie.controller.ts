import {
    Body, Controller, Delete, Get, Middlewares, Path, Post, Put, Route, SuccessResponse, Tags,
} from "tsoa";
import { authenticate } from "../middlewares/auth.middleware";
import type { CreateMovieDTO, MovieResponseDTO, UpdateMovieDTO } from "../dtos/movie.dto";
import { MovieService } from "../services/movie.service";

@Route("movies")
@Tags("Movies")
@Middlewares(authenticate)
export class MovieController extends Controller {
    private readonly movieService = new MovieService();

    /** Retorna todos os filmes cadastrados. */
    @Get()
    @SuccessResponse("200", "Filmes encontrados")
    public async findAll(): Promise<MovieResponseDTO[]> {
        return this.movieService.findAll();
    }

    /** Retorna um filme pelo seu identificador. */
    @Get("{id}")
    @SuccessResponse("200", "Filme encontrado")
    public async findById(@Path() id: string): Promise<MovieResponseDTO> {
        return this.movieService.findById(id);
    }

    /** Cadastra um filme associado a um diretor existente. */
    @Post()
    @SuccessResponse("201", "Filme criado")
    public async create(@Body() body: CreateMovieDTO): Promise<MovieResponseDTO> {
        const movie = await this.movieService.create(body);
        this.setStatus(201);
        return movie;
    }

    /** Atualiza os dados de um filme. */
    @Put("{id}")
    @SuccessResponse("200", "Filme atualizado")
    public async update(@Path() id: string, @Body() body: UpdateMovieDTO): Promise<MovieResponseDTO> {
        return this.movieService.update(id, body);
    }

    /** Remove um filme. */
    @Delete("{id}")
    @SuccessResponse("204", "Filme removido")
    public async delete(@Path() id: string): Promise<void> {
        await this.movieService.delete(id);
        this.setStatus(204);
    }
}