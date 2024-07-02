import { lazy } from 'react';

const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));

export { ArticleEditPageAsync };
