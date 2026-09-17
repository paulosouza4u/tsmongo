import { NextFunction, Request, Response } from "express";

export enum UserRole {
    READER = 'READER',
    MODERATOR = 'MODERATOR',
    ADMIN = 'ADMIN'
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader: string | undefined = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Token não fornecido.'});
        return;
    }

    const token = authHeader.split(' ')[1];
    if (token === 'jwt-token-valido') {
        req.userId = 'user_id'; // vem do banco
        req.role = UserRole.ADMIN; // vem do banco
        next();
    } else {
        res.status(401).json({ error: 'Token inválido ou expirado.'})
    }
    
}