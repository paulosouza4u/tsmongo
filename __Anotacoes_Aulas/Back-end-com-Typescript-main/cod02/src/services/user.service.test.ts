import { describe, expect, test } from "@jest/globals";
import { getUserProfileById, IUserProfile } from "./user.service";
import { IUserDTO } from "../dtos/user.dto";

describe("User Services", () => {
    test("Deve retornar o perfil do usuário correspondente ao ID 1", () => {
        // Montar cenário

        // Executar a ação
        const user_1: IUserProfile | undefined = getUserProfileById("1");

        expect(user_1).toBeDefined();
        expect(user_1?.id).toBe("1");
        expect(user_1?.email).toBe("ana.silva@email.com");

    });

    test("Deve retornar undefined se o ID 9999 do usuário não existir", () => {

        const user_9999 = getUserProfileById("9999");

        expect(user_9999).toBeUndefined();
    });

});