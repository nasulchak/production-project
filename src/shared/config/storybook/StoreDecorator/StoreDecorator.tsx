/* eslint-disable feature-sliced-custom-plugin/public-api-imports */
import { Decorator } from '@storybook/react';
import React from 'react';
import '@/app/styles/index.scss';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const storeDecorator = (
    store: DeepPartial<StateSchema>,
    asyncReducer?: ReducerList,
): Decorator => (story) => (
    <StoreProvider initialState={store} asyncReducers={{ ...asyncReducer, ...defaultAsyncReducers }}>
        {story()}
    </StoreProvider>
);
