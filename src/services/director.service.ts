import { Types } from "mongoose";
import { CreateDirectorDTO, DirectorMoviesResponseDTO, DirectorResponseDTO, UpdateDirectorDTO } from "../dtos/director.dto";
import { DirectorRepository } from "../repositories/director.repository";

// @ts-ignore
const toResponse = (director: { id: string; name: string; biography?: string; nationality?: string }): DirectorResponseDTO => ({
    id: director.id,
    name: director.name,
    biography: director.biography,
    nationality: director.nationality,
});

export class DirectorService {
    private readonly directorRepository = new DirectorRepository();
    public async findAll(): Promise<DirectorResponseDTO[]> {
        const directors = await this.directorRepository.findAll();
        return directors.map(toResponse);
    }

    public async findById(id: string): Promise<DirectorResponseDTO> {
        if (!Types.ObjectId.isValid(id)) throw new Error("Diretor inválido");
        const director = await this.directorRepository.findById(id);
        if (!director) throw new Error("Diretor não encontrado");
        return toResponse(director);
    }

    public async create(data: CreateDirectorDTO): Promise<DirectorResponseDTO> {
        return toResponse(await this.directorRepository.create(data));
    }

    public async update(id: string, data: UpdateDirectorDTO): Promise<DirectorResponseDTO> {
        if (!Types.ObjectId.isValid(id)) throw new Error("Diretor inválido");
        const director = await this.directorRepository.update(id, data);
        if (!director) throw new Error("Diretor não encontrado");
        return toResponse(director);
    }

    public async delete(id: string): Promise<void> {
        if (!Types.ObjectId.isValid(id)) throw new Error("Diretor inválido");
        const director = await this.directorRepository.delete(id);
        if (!director) throw new Error("Diretor não encontrado");
    }

    /** Usa aggregation e $lookup para montar o diretor com seus filmes. */
    public async findWithMovies(id: string): Promise<DirectorMoviesResponseDTO> {
        if (!Types.ObjectId.isValid(id)) throw new Error("Diretor inválido");
        const result = await this.directorRepository.findWithMovies(id);
        if (result.length === 0) throw new Error("Diretor não encontrado");
        return result[0] as DirectorMoviesResponseDTO;
    }
}