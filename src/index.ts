import app from './app';
import {connectDB} from "./config/database";

const port: number = 3000;

const startServer = async  () => {
    await connectDB();
    app.listen(port, (error) => {
        console.log(`Serviço executando na porta ${port}`);
    });
}

startServer();
