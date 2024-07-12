import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    test('Succes fetch', async () => {
        const data = {
            age: 12,
            lastname: 'Korotov',
            city: 'Moscow',
            country: Country.Russia,
            currency: Currency.RUB,
            first: 'Alex',
            username: 'AlexKor',
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
