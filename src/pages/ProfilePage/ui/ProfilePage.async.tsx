import { lazy } from 'react';

const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 2000);
}));

export { ProfilePageAsync };
