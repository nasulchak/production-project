import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import cls from './ArticlePage.module.scss';
import { articlePageActions, articlePageReducer, getArticles } from '../model/slices/articlePageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageError, getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlePageReducer,
};

const ArticlePage = ({ className } : ArticlePageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onLoadNexPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNexPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlePage);
