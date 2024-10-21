import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { LoginPage } from '../modules/login';
import { SignupPage } from '../modules/signup';
import { CreateMockDraftsPage, MockDraftsPage } from '../modules/mock-drafts';
import { PageLayout } from '../modules/shared';
import { HomePage } from '../modules/home/normal-screen/HomePage';
import { PlayersPage } from '../modules/players';
import { FAQPage } from '../modules/home/normal-screen/features/FAQPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
                path="/players/*"
                element={<ProtectedRoute path="/" element={<PlayersPage />} layout={<PageLayout />} />}
            />
            <Route
                path="/mock-drafts/create/*"
                element={<ProtectedRoute path="/" element={<CreateMockDraftsPage />} layout={<PageLayout />} />}
            />
            <Route
                path="/mock-drafts/*"
                element={<ProtectedRoute path="/" element={<MockDraftsPage />} layout={<PageLayout />} />}
            />
            {/* Corrected path for FAQ page */}
            <Route
                path="/faq" // Changed from "/FAQPage/*" to "/faq"
                element={<ProtectedRoute path="/" element={<FAQPage />} layout={<PageLayout />} />}
            />
            {/* Default route */}
            <Route path="/*" element={<ProtectedRoute path="/" element={<HomePage />} layout={<PageLayout />} />} />
        </Routes>
    );
}