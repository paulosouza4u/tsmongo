import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { CreateUserDTO, LoginDTO, LoginResponseDTO, UserResponseDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repository";

const JWT_SECRET = process.env.JWT_SECRET || "chave-temporaria";

export class UserService {
    private readonly userRepository = new UserRepository();
    public async register(data: CreateUserDTO): Promise<UserResponseDTO> {
        const email = data.email.toLowerCase();
        const existingUser = await this.userRepository.findByEmail(email);

        if (existingUser) {
            throw new Error("E-mail já cadastrado");
        }

        const password = await bcrypt.hash(data.password, 10);
        const user = await this.userRepository.create({
            name: data.name,
            email,
            password,
            role: "user",
        });

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        };
    }

    public async login(data: LoginDTO): Promise<LoginResponseDTO> { const user = await this.userRepository.findByEmail(data.email.toLowerCase());
        if (!user || !(await bcrypt.compare(data.password, user.password))) {
            throw new Error("Credenciais inválidas");
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        };
    } }