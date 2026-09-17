import { Request, Response, NextFunction } from "express";
import { UserRole } from "./auth.middleware";

export const requireRole = (...allowedRoles: UserRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.role) {
            res.status(401).json({ error: 'Usuário não autenticado.'});
            return;
        }
        if (!allowedRoles.includes(req.role)) {
            res.status(403).json({ error: 'Acesso restrito a este perfil.'});
            return;
        }
        next();
    };
};