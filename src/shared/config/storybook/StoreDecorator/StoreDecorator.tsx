import { Decorator } from '@storybook/react';
import React from 'react';
import 'app/styles/index.scss';
import { Provider } from 'react-redux';
import { StateSchema, createReduxStore } from 'app/providers/StoreProvider';

const store = createReduxStore({ counter: { value: 10 } } as StateSchema);

export const storeDecorator = (): Decorator => (story) => (
    <Provider store={store}>
        {story()}
    </Provider>

);
