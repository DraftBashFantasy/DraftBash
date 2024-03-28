import { Route, Routes } from "react-router-dom";
import { LoginPageMobile } from "../modules/login";
import { SignupPageMobile } from "../modules/signup";
import ProtectedRoute from "./ProtectedRoute";
import { CreateMockDraftsPageMobile, MockDraftsPageMobile } from "../modules/mock-drafts";
import { PageLayoutMobile } from "../modules/shared/mobile-screen/layout/PageLayoutMobile";
import { HomePageMobile } from "../modules/home";

export const AppRoutesMobile = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPageMobile />} />
            <Route path="/signup" element={<SignupPageMobile />} />
            <Route
                path="/mock-drafts/create/*"
                element={
                    <ProtectedRoute
                        path="/"
                        element={<CreateMockDraftsPageMobile />}
                        layout={<PageLayoutMobile />}
                    />
                }
            />
            <Route
                path="/mock-drafts/*"
                element={
                    <ProtectedRoute
                        path="/"
                        element={<MockDraftsPageMobile />}
                        layout={<PageLayoutMobile />}
                    />
                }
            />
            <Route
                path="/*"
                element={
                    <ProtectedRoute path="/" element={<HomePageMobile />} layout={<PageLayoutMobile />} />
                }
            />
        </Routes>
    );
}
