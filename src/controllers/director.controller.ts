import {
    Body, Controller, Delete, Get, Middlewares, Path, Post, Put, Route, SuccessResponse, Tags,
} from "tsoa";
import { authenticate } from "../middlewares/auth.middleware";
import type { CreateDirectorDTO, DirectorMoviesResponseDTO, DirectorResponseDTO, UpdateDirectorDTO } from "../dtos/director.dto";
import { DirectorService } from "../services/director.service";

@Route("directors")
@Tags("Directors")
@Middlewares(authenticate)
export class DirectorController extends Controller {
    private readonly directorService = new DirectorService();

    /** Retorna todos os diretores cadastrados. */
    @Get()
    @SuccessResponse("200", "Diretores encontrados")
    public async findAll(): Promise<DirectorResponseDTO[]> {
        return this.directorService.findAll();
    }

    /** Retorna um diretor pelo seu identificador. */
    @Get("{id}")
    @SuccessResponse("200", "Diretor encontrado")
    public async findById(@Path() id: string): Promise<DirectorResponseDTO> {
        return this.directorService.findById(id);
    }

    /** Retorna um diretor e seus filmes usando aggregation com $lookup. */
    @Get("{id}/movies")
    @SuccessResponse("200", "Diretor e filmes encontrados")
    public async findWithMovies(@Path() id: string): Promise<DirectorMoviesResponseDTO> {
        return this.directorService.findWithMovies(id);
    }

    /** Cadastra um diretor. */
    @Post()
    @SuccessResponse("201", "Diretor criado")
    public async create(@Body() body: CreateDirectorDTO): Promise<DirectorResponseDTO> {
        const director = await this.directorService.create(body);
        this.setStatus(201);
        return director;
    }

    /** Atualiza os dados de um diretor. */
    @Put("{id}")
    @SuccessResponse("200", "Diretor atualizado")
    public async update(@Path() id: string, @Body() body: UpdateDirectorDTO): Promise<DirectorResponseDTO> {
        return this.directorService.update(id, body);
    }

    /** Remove um diretor. */
    @Delete("{id}")
    @SuccessResponse("204", "Diretor removido")
    public async delete(@Path() id: string): Promise<void> {
        await this.directorService.delete(id);
        this.setStatus(204);
    }
}