import { AppRoute } from "app/provider/routes";
import {Navbar} from "widgets/Navbar";
import {Svg} from "shared/ui/Svg/Svg";
import LightSvg from "shared/assets/light-theme.svg";
import darkSvg from "shared/assets/dark-theme.svg";
import {ThemeToggle} from "features/ThemeToggle";

export const App = () => {
    return (
        <div>
            <Navbar />
            <ThemeToggle />
            <div>
                <AppRoute />
            </div>
        </div>
    )
}
