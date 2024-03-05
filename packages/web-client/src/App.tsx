import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './modules/shared';
import ProtectedRoute from './ProtectedRoute';
import { LoginPage } from './modules/login';
import { SignupPage } from './modules/signup';
import { MockDraftsPage } from './modules/mock-drafts/pages/MockDraftsPage';
import { CreateMockDraftsPage } from './modules/mock-drafts/pages/CreateMockDraftsPage';

export function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/*" element={<ProtectedRoute path="/" element={<MockDraftsPage />} />} />
                    <Route
                        path="/mock-drafts/*"
                        element={<ProtectedRoute path="/create" element={<CreateMockDraftsPage />} />}
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}