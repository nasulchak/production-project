import { lazy } from 'react';

const AboutPageAsync = lazy(() => new Promise(resolve =>
    //@ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 2000)
))

export {AboutPageAsync}