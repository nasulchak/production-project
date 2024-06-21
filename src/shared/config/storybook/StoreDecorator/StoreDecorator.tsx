import { Decorator } from '@storybook/react';
import React from 'react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider, createReduxStore } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject, Store } from '@reduxjs/toolkit';
import { loginReducer } from 'feauters/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};
export const storeDecorator = (
    store: StateSchema,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>,
): Decorator => (story) => (
    <StoreProvider initialState={store} asyncReducers={{ ...asyncReducer, ...defaultAsyncReducers }}>
        {story()}
    </StoreProvider>

);
