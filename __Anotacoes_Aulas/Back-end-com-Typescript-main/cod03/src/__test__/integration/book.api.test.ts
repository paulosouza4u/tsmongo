import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from "@jest/globals";
import supertest from "supertest";
import app from "../../app";

describe("Book API", () => {

    let token: string = 'jwt-token-valido';

    /*
    

    beforeAll(() => {

    });

    beforeEach(() => {

    });

    afterEach(() => {

    });

    afterAll(() => {

    }); */

    test("POST /books", async () => {
        const result = await supertest(app)
        .post("/books")
        .auth(token, { type: "bearer" })
        // .set('Authorization', `Bearer ${token}`)
        .send({
            title: '',
            author: '',
            isbn: '',
            pages: '',
        });

        expect(result.statusCode).toBe(201);
    })
});