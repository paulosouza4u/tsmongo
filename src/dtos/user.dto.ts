export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface UserResponseDTO {
    id: string;
    name: string;
    email: string;
    role?: string;
}

export interface LoginResponseDTO {
    token: string;
    user: UserResponseDTO;
}