import { lazy } from 'react';

const ArticlePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlePage')), 400);
}));

export { ArticlePageAsync };
