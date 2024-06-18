import { Decorator } from '@storybook/react';
import React from 'react';

import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';

export const styleDecorator = (theme: Theme): Decorator => (story) => (
    <div className={`app ${theme}`}>
        {story()}
    </div>
);
