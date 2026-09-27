export interface CreateDirectorDTO {
    name: string;
    biography?: string;
    nationality?: string;
}

export interface UpdateDirectorDTO {
    name?: string;
    biography?: string;
    nationality?: string;
}

export interface DirectorResponseDTO {
    id: string;
    name: string;
    biography?: string;
    nationality?: string;
}

export interface DirectorMoviesResponseDTO extends DirectorResponseDTO {
    movies: Array<{
        id: string;
        title: string;
        releaseYear: number;
        genre: string;
    }>;
}