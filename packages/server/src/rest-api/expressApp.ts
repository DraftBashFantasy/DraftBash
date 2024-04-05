import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { usersRouter } from './routes';
import { mockDraftsRouter } from './routes';
import { setCache } from './middleware/cache';
import { initializeDatabase } from '../../../infrastructure';

dotenv.config();

export const expressApp = express();

expressApp.use(
    cors(),
);

expressApp.use(express.json());
expressApp.use(setCache);

expressApp.use('/api/v1/users', usersRouter);
expressApp.use('/api/v1/mock-drafts', mockDraftsRouter);

expressApp.get('/api/v1/players/:player_id/gamelogs', async (req, res) => {
    try {
        const { gamelogsCollection, playersCollection } = await initializeDatabase();

        const playerId = parseInt(req.params.player_id);
        const gamelogs = await gamelogsCollection.find({ playerId: playerId, season: 2023 }).toArray();

        if (gamelogs.length === 0) {
            return res.status(404).send('No gamelogs found for the specified player and season.');
        }

        res.send(gamelogs);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});


expressApp.get('/api/v1/players', async (req, res) => {
    const { gamelogsCollection, playersCollection } = await initializeDatabase();

    const players = await playersCollection.find({ "seasonProjections.pointsLeagueRank": { "$exists": true, "$ne": null } }).sort("seasonProjections.pointsLeagueRank", 1).toArray();
    res.send(players);
});

expressApp.get('/', (req, res) => {
    res.send("The Draftbash api");
});
