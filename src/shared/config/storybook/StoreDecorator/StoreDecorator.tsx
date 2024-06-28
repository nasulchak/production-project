import { Decorator } from '@storybook/react';
import React from 'react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'feauters/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'feauters/addCommentForm/model/slice/addCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const storeDecorator = (
    store: DeepPartial<StateSchema>,
    asyncReducer?: ReducerList,
): Decorator => (story) => (
    <StoreProvider initialState={store} asyncReducers={{ ...asyncReducer, ...defaultAsyncReducers }}>
        {story()}
    </StoreProvider>
);
