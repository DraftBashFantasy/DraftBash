import express from 'express';
import http from 'http';
import { expressApp } from './rest-api/expressApp';

// HTTP request server. Receives and sends requests for the web API and websockets. This is the main entry point.
export const httpServer = http.createServer(expressApp);

const PORT = process.env.PORT || 3000;

(httpServer as unknown as express.Application).listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
