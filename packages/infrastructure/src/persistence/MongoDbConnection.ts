import { MongoClient } from 'mongodb';

// Connection URI
const uri =
    'mongodb+srv://stephenpfeddes:mODX3ExRlJAJwDko@cluster0.h6chsrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Database Name
const dbName = 'player_stats_db';

// Create a new MongoClient
const client = new MongoClient(uri);

async function initializeDatabase() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Select the database
        const database = client.db(dbName);

        // Export the collections
        return {
            gamelogsCollection: database.collection('player_gamelogs'),
            playersCollection: database.collection('players'),
        };
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // Rethrow the error to handle it in the caller
    }
}

// Export the function to initialize the database
export { initializeDatabase };
