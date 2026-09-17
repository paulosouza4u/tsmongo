import { IUserDTO } from "../dtos/user.dto";

export class User {
    private _id: string | null = null;
    private _username: string;
    private _name: string;
    private _email: string;
    _totalXP: number;

    constructor(id: string | null, username: string, name: string, email: string, totalXP = 0) {
        this._id = id;
        this._username = username;
        this._name = name;
        this._email = email;
        this._totalXP = totalXP;
    }

    static createNewUser({ username, name, email }: IUserDTO): User {
        return new User(null, username, name, email);
    }

    addXP(xp: number) {
        this._totalXP += xp;
    }

    get id() {
        return this._id;
    }

    get username() {
        return this._username;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get totalXP() { return this._totalXP };

}