import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { usersRouter } from './routes';
import { mockDraftsRouter } from './routes';
import { setCache } from './middleware/cache';
import { todosRouter } from './routes/todosRouter';
// This is the entry point for the REST API. It creates an Express app, sets up middleware, and defines routes.

dotenv.config();

export const expressApp = express();

expressApp.use(
    cors(),
);

expressApp.use(express.json());
expressApp.use(setCache);

expressApp.use('/api/v1/users', usersRouter);
expressApp.use('/api/v1/mock-drafts', mockDraftsRouter);
expressApp.use('/api/v1/to-dos', todosRouter);

expressApp.get('/', (req, res) => {
    res.send("The Draftbash API");
});
