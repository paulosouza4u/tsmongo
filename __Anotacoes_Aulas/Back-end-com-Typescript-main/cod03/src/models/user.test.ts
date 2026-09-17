import {describe, expect, test} from "@jest/globals";
import { User } from "./user";

describe("User Model: Regras de Pontuação", () => {
    test("Deve retornar 100 ao adicionar 100 de XP para um Usuário com 0 de XP.", () => {
        // Montar o Cenário
        const user = new User(null, "", "", "");

        // Agir para receber um resultado
        user.addXP(100);

        // if (user.totalXP == 100) return true;
        // expect(user.totalXP == 10).toBeTruthy();
        // expect(100).toBe(user.totalXP);
        expect(user.totalXP).toBe(100);

        
    });
});