import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticlePage.module.scss';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { Page } from '@/widgets/Page';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlePageReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const onLoadNexPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlePage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                data-testid="ArticlePage"
                onScrollEnd={onLoadNexPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticlePageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
