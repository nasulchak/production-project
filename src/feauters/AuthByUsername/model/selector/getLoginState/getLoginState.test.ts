import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
        });
    });

    test('should work by enpty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
