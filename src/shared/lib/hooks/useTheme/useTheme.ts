import { useContext } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '../../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

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
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.className = theme || Theme.LIGHT;
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.LIGHT, toogleTheme };
}
