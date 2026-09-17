import * as dotenv from 'dotenv';
import mongoose from "mongoose";

export const connectDB = async () => {
    dotenv.config();

    const user = process.env.MONGODB_USERNAME;
    const pass = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URI || 'localhost';
    const port = process.env.MONGODB_PORT;
    const dbName = process.env.MONGODB_DATABASE || 'test';

    try {
        const uri = `mongodb://${user}:${pass}@${url}:${port}`;

        await mongoose.connect(uri, {
            dbName
        });
        console.log(`Connected to MongoDB database: ${dbName}`);
    } catch (e) {
        console.log(`Dont connect to MongoDB database:${dbName}`);
        console.error(e);
    }
};
