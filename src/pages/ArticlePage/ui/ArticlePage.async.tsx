import { lazy } from 'react';

const ArticlePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlePage')), 2000);
}));

export { ArticlePageAsync };
