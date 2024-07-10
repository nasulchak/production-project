import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginPassword = createSelector(
    getLoginState,
    (loginForm: LoginSchema | undefined) => loginForm?.password || '',
);
