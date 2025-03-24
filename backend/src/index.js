import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './lib/db.js';

import authRoutes from './routes/authRoute.js';
import messageRoutes from './routes/messageRoute.js';

const app = express();  

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes); 
app.use('/api/message', messageRoutes); 

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); 
  connectDB();
});