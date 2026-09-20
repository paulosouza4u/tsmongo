import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './build/routes';
import swaggerJson from "../dist/build/swagger.json" with {type: "json"};
import fs from 'fs';
import path from 'path';
import { connectDB } from './config/database';

const app: Express = express();

app.use(express.json());
RegisterRoutes(app);

app.get("/", (req, res) => {
    res.status(200).send("Olá");
});

// app.use("/docs", swaggerUi.serve, async (req: Request, res: Response) => {
//     return res.send(
//         swaggerUi.generateHTML(swaggerJson)
//     );
// })

const swaggerDocs = JSON.parse(fs.readFileSync(
    path.join(__dirname, '../dist/build/swagger.json'), 'utf-8'
));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;