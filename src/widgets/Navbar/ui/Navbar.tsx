import { AppLink } from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeconfig/routeconfig";
import {useLocation} from "react-router-dom";
import AuthLogo from "shared/assets/logo-auth.svg";
import {Text} from "shared/ui/Text/Text";

export const Navbar = () => {
    const location = useLocation()

    return (
        <div>
            <AppLink to={RoutePath.MAIN}>Главная</AppLink>
            <AppLink to={RoutePath.PROFILE}>Профиль</AppLink>
            {
                location.pathname === "/auth"
                    ?
                    <AuthLogo />
                    :
                    <Text>Выйти</Text>
            }
        </div>
    )
}
