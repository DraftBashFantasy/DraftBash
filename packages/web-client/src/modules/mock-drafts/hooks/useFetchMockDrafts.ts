import { useState, useEffect } from 'react';
import { useAuth } from '../../shared';

export const useFetchMockDrafts = () => {
    const { user } = useAuth();
    const [drafts, setDrafts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<Error>();

    useEffect(() => {
        const fetchUserDrafts = async () => {
            try {
                // Assuming you have an API endpoint to fetch user drafts by userId
                const response = await fetch(`/api/user/${user?.userId}/drafts`);
                const data = await response.json();
                setDrafts(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setFetchError(error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserDrafts();
    }, [user?.userId]);

    return { drafts, loading, fetchError };
};
