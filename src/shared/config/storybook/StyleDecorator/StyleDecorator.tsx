/* eslint-disable feature-sliced-custom-plugin/layer-imports */
import { Decorator } from '@storybook/react';
import '@/app/styles/index.scss';
import { Theme } from '@/shared/const/theme';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const styleDecorator = (theme: Theme): Decorator => (story) => (
    <ThemeProvider initialTheme={theme}>
        <div id="root" className={`${theme}`}>
            {story()}
        </div>
    </ThemeProvider>

);
