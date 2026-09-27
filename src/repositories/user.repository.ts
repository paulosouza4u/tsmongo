import { UserModel } from "../models/user.model";

export class UserRepository {
    public findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    public create(data: { name: string; email: string; password: string; role: "user" | "admin" }) {
        return UserModel.create(data);
    }
}