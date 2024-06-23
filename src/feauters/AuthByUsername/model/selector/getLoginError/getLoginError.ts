import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';
import { LoginSchema } from '../../types/loginSchema';

export const getLoginError = createSelector(
    getLoginState,
    (loginForm: LoginSchema | undefined) => loginForm?.error,
);
