import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUserName';

describe('loginByUserName.test', () => {
    test('Succes login', async () => {
        const userValue = { username: 'admin', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const result = await thunk.callThunk({ password: '123', username: 'admin' });
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthDate(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('Error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk({ password: '123', username: 'admin' });
        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Введен неверный логин или пароль');
    });
});
