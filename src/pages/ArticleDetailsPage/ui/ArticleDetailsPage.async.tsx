import { lazy } from 'react';

const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 2000);
}));

export { ArticleDetailsPageAsync };
