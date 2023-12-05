import {routeconfig} from "shared/config/routeconfig/routeconfig";
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {PageLoader} from "widgets/PageLoader";

export const AppRoute = () => {
    return (
        <Routes>
            {...Object.values(routeconfig).map(({ path, element }) => (
                <Route key={path} path={path} element={<Suspense fallback={<PageLoader />}>{element}</Suspense>} />
            ))}
        </Routes>
    )
}
