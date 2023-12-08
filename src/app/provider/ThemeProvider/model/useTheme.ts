import {useContext} from "react";
import {LOCAL_STORAGE_THEME, ThemeContext, Themes} from "../model/ThemeContext";

interface UseThemeProps {
    theme: Themes;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeProps => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
        setTheme(newTheme);
    }


    return {
        theme,
        toggleTheme,
    };
};
