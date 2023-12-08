import { createContext } from "react";

export enum Themes {
    LIGHT = "LIGHT",
    DARK = "DARK"
}

interface ThemeContextProps {
    theme?: Themes
    setTheme?: (theme: Themes) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME = "theme";
