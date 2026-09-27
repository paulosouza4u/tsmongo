import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "chave-temporaria";

type AuthenticatedUser = { userId: string; email: string; role: string };

declare global {
    namespace Express {
        interface Request {
            user?: AuthenticatedUser;
        }
    }
}

export function authenticate(req: Request, res: Response, next: NextFunction): void {
    const authorization = req.headers.authorization;
    const [scheme, token] = authorization?.split(" ") ?? [];

    if (scheme !== "Bearer" || !token) {
        res.status(401).json({ message: "Use o formato Bearer token" });
        return;
    }

    try {
        req.user = jwt.verify(token, JWT_SECRET) as AuthenticatedUser;
        next();
    } catch {
        res.status(401).json({ message: "Token inválido ou expirado" });
    }
}