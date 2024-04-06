import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './modules/shared';
import { AppRoutes } from './routes/AppRoutes';
import { AppRoutesMobile } from './routes/AppRoutesMobile';

// Entry point
export const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                {window.screen.width > 500 ? (
                    <AppRoutes />
                ) : (
                    <AppRoutesMobile />
                )}
            </BrowserRouter>
        </AuthProvider>
    );
}