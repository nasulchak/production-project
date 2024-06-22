import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUserName';

jest.mock('axios');
const mokedAxios = jest.mocked(axios, true);

describe('loginByUserName.test', () => {
    test('Succes login', async () => {
        const userValue = { username: 'admin', id: '1' };
        mokedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ password: '123', username: 'admin' });
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthDate(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mokedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('Error login', async () => {
        mokedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ password: '123', username: 'admin' });
        expect(mokedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Введен неверный логин или пароль');
    });
});
