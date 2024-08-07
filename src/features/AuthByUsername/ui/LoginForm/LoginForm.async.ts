import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./LoginForm')), 2000);
        }),
);

export { LoginFormAsync };
