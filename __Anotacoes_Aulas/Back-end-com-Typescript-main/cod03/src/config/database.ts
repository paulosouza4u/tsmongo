import * as dotenv from 'dotenv';
import mongoose from 'mongoose';


export const connectDB = async () => {
    dotenv.config();
    const user = process.env.MONGODB_USERNAME;
    const pass = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL || 'localhost';
    const port = process.env.MONGODB_PORT || '27017';
    const dbName = process.env.MONGODB_DATABASE || 'test';

    try {

        const uri = `mongodb://${user}:${pass}@${url}:${port}`;

        await mongoose.connect(uri, {
            dbName
        });
        console.log(`MongoDB ${url}:${port} conectado ao banco ${dbName}`);
    } catch (error) {
        console.log(`MongoDB ${url}:${port} conectado ao banco ${dbName}`);
        console.error(error);
    }
};