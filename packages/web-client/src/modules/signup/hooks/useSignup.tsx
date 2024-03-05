/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJwtTokenValidator, useAuth } from '../../shared';
import { UserCredentials } from '../../../../../business/src/value-objects';

export const useSignup = () => {
    const [signupError, setSignupError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { login } = useAuth();
    const validateJwtToken = useJwtTokenValidator();

    const handleSignup = async (username: string, email: string, password: string, confirmPassword: string) => {
        if (password !== confirmPassword) {
            setSignupError('Passwords must match');
        } 
        else {
            try {
                const userCredentials = new UserCredentials({ username: username, email: email, password: password });
                const response = await fetch((import.meta as any).env.VITE_REACT_API_URL + '/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: userCredentials.getUsername(),
                        email: userCredentials.getEmail(),
                        password: userCredentials.getPassword(),
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setSignupError(errorData.error);
                } else {
                    const data = await response.json();
                    login(data.jwtToken);
                    validateJwtToken(data.jwtToken);
                    navigate('/');
                }
            } catch (error) {
                setSignupError(error.message);
            }
        }
    };

    return {
        handleSignup,
        signupError,
    };
};