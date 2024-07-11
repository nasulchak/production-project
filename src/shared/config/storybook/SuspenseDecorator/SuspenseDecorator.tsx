import { Decorator } from '@storybook/react';
import React, { Suspense } from 'react';

export const routerDecorator = (): Decorator => (story) => (
    <Suspense fallback={<div>...</div>}>
        {story()}
    </Suspense>

);
