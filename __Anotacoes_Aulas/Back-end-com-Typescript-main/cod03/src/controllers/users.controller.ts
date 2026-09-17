import { Request, Response } from "express";
import { UserRole } from "../middlewares/auth.middleware";
import { getUserProfileById, saveANewUser } from "../services/user.service";
import { isIUserDTO, IUserDTO } from "../dtos/user.dto";

interface User {
    username: string,
    email: string,
    token: string,
}

export const saveUser = (req: Request, res: Response): void => {
    const user: unknown = req.body;

    if (!isIUserDTO(user)) {
        res.status(400).json({ error: "Informe todos dos dados obrigatórios de usuário."});
        return;
    }

    const savedUser = saveANewUser(user);
    res.status(201).json(savedUser);
}

// /users/:id -> 1
export const getUserProfile = (req: Request, res: Response): void => {
    const userId = req.params.id;

    // TODO: Implementar todas as validações necessárias
    if (req.role === UserRole.READER && req.userId !== userId) {
        res.status(401).json({ error: "Acesso restrito a este perfil."});
        return;
    }

    if (typeof userId === 'string'){
        const userProfile = getUserProfileById(userId);
        res.status(200).json(userProfile);
    }

}