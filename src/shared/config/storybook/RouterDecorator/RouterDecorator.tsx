import { Decorator } from '@storybook/react';
import React from 'react';

import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (): Decorator => (story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>

);
