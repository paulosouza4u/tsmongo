import { Types } from "mongoose";
import { CreateMovieDTO, MovieResponseDTO, UpdateMovieDTO } from "../dtos/movie.dto";
import { MovieRepository } from "../repositories/movie.repository";

// @ts-ignore
const toResponse = (movie: { id: string; title: string; synopsis?: string; releaseYear: number; genre: string; director: Types.ObjectId }): MovieResponseDTO => ({
    id: movie.id,
    title: movie.title,
    synopsis: movie.synopsis,
    releaseYear: movie.releaseYear,
    genre: movie.genre,
    director: movie.director.toString(),
});

export class MovieService {
    private readonly movieRepository = new MovieRepository();
    public async findAll(): Promise<MovieResponseDTO[]> {
        const movies = await this.movieRepository.findAll();
        return movies.map(toResponse);
    }

    public async findById(id: string): Promise<MovieResponseDTO> {
        if (!Types.ObjectId.isValid(id)) throw new Error("Filme inválido");
        const movie = await this.movieRepository.findById(id);
        if (!movie) throw new Error("Filme não encontrado");
        return toResponse(movie);
    }

    public async create(data: CreateMovieDTO): Promise<MovieResponseDTO> {
        if (!Types.ObjectId.isValid(data.director) || !(await this.movieRepository.directorExists(data.director))) {
            throw new Error("Diretor não encontrado");
        }
        return toResponse(await this.movieRepository.create(data));
    }

    public async update(id: string, data: UpdateMovieDTO): Promise<MovieResponseDTO> {
        if (!Types.ObjectId.isValid(id)) throw new Error("Filme inválido");
        if (data.director && (!Types.ObjectId.isValid(data.director) || !(await this.movieRepository.directorExists(data.director)))) {
            throw new Error("Diretor não encontrado");
        }
        const movie = await this.movieRepository.update(id, data);
        if (!movie) throw new Error("Filme não encontrado");
        return toResponse(movie);
    }

    public async delete(id: string): Promise<void> {
        if (!Types.ObjectId.isValid(id)) throw new Error("Filme inválido");
        const movie = await this.movieRepository.delete(id);
        if (!movie) throw new Error("Filme não encontrado");
    }
}