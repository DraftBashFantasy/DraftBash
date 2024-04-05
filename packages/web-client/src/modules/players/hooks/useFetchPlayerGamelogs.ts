import { useState, useEffect } from 'react';
import { useAuth } from '../../shared';
import { GamelogResponse, PlayerResponse } from '../../../../../contracts';

export const useFetchPlayerGamelogs = () => {
    const [gamelogs, setGamelogs] = useState<GamelogResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<Error>();
    const [season, setSeason] = useState<number>(2023);

    

    const fetchGamelogs = async (playerId: number) => {
        try {
            const response = await fetch(
                (import.meta as any).env.VITE_REACT_API_URL + `/players/${playerId}/gamelogs?season=${season}`
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
