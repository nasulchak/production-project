import { Decorator } from '@storybook/react';
import React from 'react';
import 'app/styles/index.scss';
import { Provider } from 'react-redux';
import { StateSchema, StoreProvider, createReduxStore } from 'app/providers/StoreProvider';
import { Store } from '@reduxjs/toolkit';
import { Schema } from 'inspector';

// const store = createReduxStore({
//     counter: { value: 10 },
//     loginForm: {
//         username: 'admin',
//         password: 'password',
//         error: 'Error',
//     },
// } as StateSchema);

export const storeDecorator = (store: StateSchema): Decorator => (story) => (
    <StoreProvider initialState={store}>
        {story()}
    </StoreProvider>

);
