import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { LoginPage } from '../modules/login';
import { SignupPage } from '../modules/signup';
import { CreateMockDraftsPage, MockDraftsPage } from '../modules/mock-drafts';
import { PageLayout } from '../modules/shared';
import { HomePage } from '../modules/home/normal-screen/HomePage';
import { PlayersPage } from '../modules/players';
import { FAQPage } from '../modules/home/normal-screen/features/FAQPage';
import { AboutusPage } from '../modules/home/normal-screen/features/aboutus'; // Import the About Me page component

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
            <Route
                path="/faq"
                element={<ProtectedRoute path="/" element={<FAQPage />} layout={<PageLayout />} />}
            />
            <Route
                path="/about-us" // New route for About Me page
                element={<ProtectedRoute path="/" element={<AboutusPage />} layout={<PageLayout />} />}
            />
            <Route path="/*" element={<ProtectedRoute path="/" element={<HomePage />} layout={<PageLayout />} />} />
        </Routes>
    );
};