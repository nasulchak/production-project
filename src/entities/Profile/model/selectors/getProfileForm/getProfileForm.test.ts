import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return data form', () => {
        const dataForm = {
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
                form: dataForm,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(dataForm);
    });

    test('should work by enpty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
