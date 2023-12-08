import {ReactNode, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME, ThemeContext, Themes} from "app/provider/ThemeProvider/model/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as Themes || Themes.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme);

    const defaultThemeProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider
            value={defaultThemeProps}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};
