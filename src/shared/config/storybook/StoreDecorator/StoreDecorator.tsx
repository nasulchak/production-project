import { Decorator } from '@storybook/react';
// eslint-disable-next-line feature-sliced-custom-plugin/layer-imports
import '@/app/styles/index.scss';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const storeDecorator =
    (store: DeepPartial<StateSchema>, asyncReducer?: ReducerList): Decorator =>
    (story) => (
        <StoreProvider
            initialState={store}
            asyncReducers={{ ...asyncReducer, ...defaultAsyncReducers }}
        >
            {story()}
        </StoreProvider>
    );
