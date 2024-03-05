/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "./useAuth";

export const useJwtTokenValidator = () => {
    const { setUser, login, logout } = useAuth();

    const validateJwtToken = async (jwtToken: string | null) => {
        const response = await fetch((import.meta as any).env.VITE_REACT_API_URL + '/users/authentication-tokens', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`,
            },
        });

        if (!response.ok) {
            logout();
        } else {
            const data = await response.json();
            setUser(data);
            login(jwtToken as string);
        }
    };

    return validateJwtToken;
};