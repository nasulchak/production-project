import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feauters/AuthByUsername';
import { UIschema } from 'feauters/UI';
import { AddCommentFormSchema } from 'feauters/addCommentForm';
import { ArticleDetailsCommentsSchema, ArticleDetailsPageSchema, ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlePage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UIschema;
    // Асинхронные редьюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    // articleDetailsComments?: ArticleDetailsCommentsSchema;
    // articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
    // true - вмонтирован, false - демонитрован
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
