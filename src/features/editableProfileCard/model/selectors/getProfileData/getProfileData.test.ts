import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfiledata.test', () => {
    test('should return data', () => {
        const data = {
            age: 12,
            lastname: 'Korotov',
            city: 'Moscow',
            country: Country.Russia,
            currency: Currency.RUB,
            first: 'Alex',
            username: 'AlexKor',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work by enpty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
