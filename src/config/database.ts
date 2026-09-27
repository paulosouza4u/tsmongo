import * as dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
    const user = process.env.MONGODB_USERNAME;
    const pass = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URI || 'localhost';
    const port = process.env.MONGODB_PORT || '27017';
    const dbName = process.env.MONGODB_DATABASE || 'cinema_db';

    const auth = user && pass ? `${user}:${pass}@` : '';
    const uri = `mongodb://${auth}${url}:${port}/${dbName}?authSource=admin`;

    try {
        await mongoose.connect(uri);
        console.log(`[Database] MongoDB conectado com sucesso. ${url}:${port}/${dbName}`);
    } catch (error) {
        console.error(`[Database Error] Falha na conexão.`, error);
        process.exit(1);
    }
};
