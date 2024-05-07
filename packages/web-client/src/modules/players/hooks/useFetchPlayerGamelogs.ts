import { useState } from 'react';
import { GamelogResponse  } from '../../../../../contracts';

export const useFetchPlayerGamelogs = () => {
    const [gamelogs, setGamelogs] = useState<GamelogResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<Error>();

    const currentDate = new Date();
    let currentSeason = currentDate.getUTCFullYear() - 1;
    if (currentDate.getMonth() + 1 >= 10) {
        currentSeason = currentSeason;
    }

    const [season, setSeason] = useState<number>(currentSeason);

    

    const fetchGamelogs = async (playerId: string) => {
        try {
            const response = await fetch(
                (import.meta as any).env.VITE_REACT_PLAYERS_API_URL + `/players/${playerId}/gamelogs?season=${season}`
            );
            const data: GamelogResponse[] = await response.json();
            setGamelogs(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setFetchError(error);
            }
        } finally {
            setLoading(false);
        }
    };

    return { gamelogs, fetchGamelogs, loading, fetchError };
};
