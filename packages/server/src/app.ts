import express from 'express';
import http from 'http';
import { expressApp } from './rest-api/expressApp';

// Entry point for the server
export const httpServer = http.createServer(expressApp);

const PORT = process.env.PORT || 3000;

(httpServer as unknown as express.Application).listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});