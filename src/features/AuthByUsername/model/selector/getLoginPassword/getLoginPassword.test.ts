import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginIsLiading.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });

    test('should work by enpty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
