import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toogleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>

    );
});
