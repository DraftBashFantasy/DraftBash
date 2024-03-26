/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import { UserResponse } from '@draftbash/contracts';

export interface AuthContextProps {
    isAuthenticated: boolean;
    login: (jwtToken: string) => void;
    logout: () => void;
    user?: UserResponse;
    setUser: (user: UserResponse) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);