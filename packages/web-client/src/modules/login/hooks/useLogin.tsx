/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useJwtTokenValidator } from '../../shared';

export const useLogin = () => {
    const [loginError, setLoginError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { login } = useAuth();
    const validateJwtToken = useJwtTokenValidator();

    const handleLogin = async (usernameOrEmail: string, password: string) => {
        try {
            const response = await fetch(`${(import.meta as any).env.VITE_REACT_API_URL}/users/authentication-tokens`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usernameOrEmail: usernameOrEmail, password: password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setLoginError(errorData.error);
            } else {
                const data = await response.json();
                login(data.jwtToken);
                validateJwtToken(data.jwtToken);
                navigate('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return {
        handleLogin,
        loginError,
    };
};