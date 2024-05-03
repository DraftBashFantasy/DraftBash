import { useState, useEffect } from 'react';
import { PlayerResponse } from '../../../../../contracts';

export const useFetchPlayers = () => {
    const [players, setPlayers] = useState<PlayerResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<Error>();

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch((import.meta as any).env.VITE_REACT_PLAYERS_API_URL + `/players`);
                const data: PlayerResponse[] = await response.json();
                console.log(data)
                setPlayers(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setFetchError(error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    return { players, loading, fetchError };
};
