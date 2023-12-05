import {RouteProps} from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AuthPage } from "pages/AuthPage";
import { NotFoundPage } from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";

enum RouteName {
    MAIN = "MAIN",
    PROFILE = "PROFILE",
    AUTH = "AUTH",
    NOT_FOUND = "NOT_FOUND"
}

export const RoutePath: Record<RouteName, string> = {
    [RouteName.MAIN]: "/",
    [RouteName.PROFILE]: "/profile",
    [RouteName.AUTH]: "/auth",
    [RouteName.NOT_FOUND]: "*"
}

export const routeconfig: Record<RouteName, RouteProps> = {
    [RouteName.MAIN]: {
        path: RoutePath.MAIN,
        element: <MainPage />,
    },
    [RouteName.PROFILE]: {
        path: RoutePath.PROFILE,
        element: <ProfilePage />
    },
    [RouteName.AUTH]: {
        path: RoutePath.AUTH,
        element: <AuthPage />,
    },
    [RouteName.NOT_FOUND]: {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage />,
    }
};
