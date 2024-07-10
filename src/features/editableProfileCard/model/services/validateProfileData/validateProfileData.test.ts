import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

const data = {
    age: 12,
    lastname: 'Korotov',
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'Alex',
    username: 'AlexKor',
};

describe('validateProfileData.test', () => {
    test('Succes ', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('Without first and las name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORECT_USER_DATA]);
    });

    test('Incorect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORECT_AGE]);
    });

    test('Incorect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORECT_COUNTRY]);
    });

    test('Incorect country', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORECT_USER_DATA,
            ValidateProfileError.INCORECT_AGE,
            ValidateProfileError.INCORECT_COUNTRY,
        ]);
    });
});
