import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLiading.test', () => {
    test('should return loading status', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work by enpty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
