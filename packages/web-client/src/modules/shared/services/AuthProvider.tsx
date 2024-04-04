/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect, useState } from "react";
import { UserResponse } from '../../../../../contracts/src/rest-api/responses/UserResponse';
import { AuthContext } from "../context/AuthContext";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState<UserResponse>();

    useEffect(() => {
        const validateJwtToken = async () => {
            const response = await fetch((import.meta as any).env.VITE_REACT_API_URL + '/users/authentication-tokens', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            });
            if (!response.ok) {
                setIsAuthenticated(false);
            } else if (localStorage.getItem('jwtToken') != null) {
                const data = await response.json();
                setUser(data);
                setIsAuthenticated(true);
            }
            else {
                setIsAuthenticated(false);
            }
        };

        validateJwtToken();
    }, []);

    const login = (jwtToken: string) => {
        localStorage.setItem('jwtToken', jwtToken);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setIsAuthenticated(false);
    };

    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, user, setUser }}>{children}</AuthContext.Provider>;
};