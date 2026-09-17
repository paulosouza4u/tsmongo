import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../../app";

describe("Reading API", () => {
    describe("POST /readings", () => {
        test("", async () => {
            const body = {
                bookId: "B001",
                pagesRead: 50, 
                notes: ""
            };

            const response = await request(app)
                .post("/readings")
                .send(body);


            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("success", true);

            expect(response.body.messagem).toContain("Leitura registrada.");
        });

    });
});