import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDb = () => {
    const dbUrl = process.env.DB_URL
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log(`Connected to Database`));
}