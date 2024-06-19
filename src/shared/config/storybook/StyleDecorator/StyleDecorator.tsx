import { Decorator } from '@storybook/react';
import React from 'react';

import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const styleDecorator = (theme: Theme): Decorator => (story) => (
    <ThemeProvider initialTheme={theme}>
        <div id="root" className={`${theme}`}>
            {story()}
        </div>
    </ThemeProvider>

);
