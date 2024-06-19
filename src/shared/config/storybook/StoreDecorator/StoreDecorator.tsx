import { Decorator } from '@storybook/react';
import React from 'react';
import 'app/styles/index.scss';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';

const store = createReduxStore({ counter: { value: 10 } });

export const storeDecorator = (): Decorator => (story) => (
    <Provider store={store}>
        {story()}
    </Provider>

);
