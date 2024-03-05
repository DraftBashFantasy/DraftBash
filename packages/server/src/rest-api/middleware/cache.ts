import { Request, Response, NextFunction } from 'express';

export const setCache = (req: Request, res: Response, next: NextFunction) => {
    // Default cache duration for requests without X-Cache-Duration header (in seconds)
    const DEFAULT_DURATION = 60 * 5; // 5 minutes

    if (req.method === 'GET') {
        // Check if the request includes no-cache directive
        const noCache = req.headers['cache-control'] && req.headers['cache-control'].toLowerCase().includes('no-cache');

        if (noCache) {
            // Respond instantly without using the cache
            res.set('Cache-Control', 'no-store');
        } else {
            // Use custom cache duration if provided, otherwise use the default
            const cacheDuration = req.headers['x-cache-duration'] || DEFAULT_DURATION;

            res.set('Cache-Control', `public, max-age=${cacheDuration}`);
        }
    } else {
        // For non-GET requests, do not store in the cache
        res.set('Cache-Control', 'no-store');
    }

    next();
};
