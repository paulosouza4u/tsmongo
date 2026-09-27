export interface CreateMovieDTO {
    title: string;
    synopsis?: string;
    releaseYear: number;
    genre: string;
    director: string;
}

export interface UpdateMovieDTO {
    title?: string;
    synopsis?: string;
    releaseYear?: number;
    genre?: string;
    director?: string;
}

export interface MovieResponseDTO {
    id: string;
    title: string;
    synopsis?: string;
    releaseYear: number;
    genre: string;
    director: string;
}