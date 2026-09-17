import { UserRole } from "../middlewares/auth.middleware";

declare global {
    namespace Express {
        interface Request {
            userId?: string;
            role?: UserRole;
        }
    }
}