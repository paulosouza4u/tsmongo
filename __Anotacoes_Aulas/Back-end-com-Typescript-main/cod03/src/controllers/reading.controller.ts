import { Request, Response } from "express";
import ReadingService from "../services/reading.service";
import { BookRepositoryMongo } from "../repositories/books.repository";
import { UserRepositoryMemory } from "../repositories/users.repository";

const readingService = new ReadingService(
    new UserRepositoryMemory(),
    new BookRepositoryMongo()
);

interface LogReadingRequest {
    bookId: string,
    pagesRead: number,
    notes?: string
}

interface LogReadingResponse {
    success: boolean,
    messagem: string,
    pointsEarned: number,
    currentGlobalRank: number,
}

export const markAsReading = (
    req: Request<{}, {}, LogReadingRequest>,
    res: Response<LogReadingResponse>
) => {

    const { bookId, pagesRead, notes } = req.body;

    const calculatedPoints = pagesRead / 10;
    const globalRank = 100;

    res.status(201).json({
        success: true,
        messagem: `Leitura registrada. ${notes ? "Anotações salvas." : ""}`,
        pointsEarned: calculatedPoints,
        currentGlobalRank: globalRank,
    });
}

export const markAsDone = (
    req: Request, res: Response
) => {
    const { userId } = req;
    const { bookId } = req.body;

    // TODO: Devidas validações

    if (userId === undefined) {
        res.status(403).json({ error: "Usuário não tem permissão."});
        return;
    }

    const [result, message] = readingService.markABookAsDone(userId, bookId);

    if (result) {
        res.json({ message });
    } else {
        res.status(400).json({ message });
    }
    
}