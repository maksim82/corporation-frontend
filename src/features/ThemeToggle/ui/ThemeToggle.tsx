import {useTheme} from "app/provider/ThemeProvider";
import {Svg} from "shared/ui/Svg/Svg";
import {Themes} from "app/provider/ThemeProvider/model/ThemeContext";
import lightIcon from "shared/assets/light-theme.svg";
import darkIcon from "shared/assets/dark-theme.svg";

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();
    const srcTheme = theme === Themes.DARK ? darkIcon : lightIcon;

    return (
        <Svg.Clickable onClick={toggleTheme} src={srcTheme} />
    );
}
