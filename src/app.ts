import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './build/routes';
import fs from 'fs';
import path from 'path';

const app: Express = express();

app.use(express.json());
RegisterRoutes(app);

app.get("/", (req, res) => {
    res.status(200).send("Olá");
});

const swaggerDocs = JSON.parse(fs.readFileSync(
    path.join(__dirname, '../dist/build/swagger.json'), 'utf-8'
));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;