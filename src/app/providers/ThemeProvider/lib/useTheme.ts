import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toogleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    // const toogleTheme = () => {
    //     const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    //     setTheme(newTheme);
    //     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    // };

    const toogleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme(newTheme);
        document.getElementById('root').className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toogleTheme };
}
