import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { usersRouter } from './routes';
import { mockDraftsRouter } from './routes';
import { setCache } from './middleware/cache';

dotenv.config();

export const expressApp = express();

expressApp.use(
    cors(),
);

expressApp.use(express.json());
expressApp.use(setCache);

expressApp.use('/api/v1/users', usersRouter);
expressApp.use('/api/v1/mock-drafts', mockDraftsRouter);

expressApp.get('/', (req, res) => {
    res.send("The Draftbash api" + process.env.DATABASE_URL);
});
