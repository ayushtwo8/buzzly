import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './lib/db.js';

import authRoutes from './routes/authRoute.js';
import messageRoutes from './routes/messageRoute.js';

const app = express();  

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}))

app.use('/api/auth', authRoutes); 
app.use('/api/message', messageRoutes); 

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); 
  connectDB();
});