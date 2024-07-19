import { Decorator } from '@storybook/react';
// eslint-disable-next-line feature-sliced-custom-plugin/layer-imports
import '@/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (): Decorator => (story) => (
    <BrowserRouter>{story()}</BrowserRouter>
);
