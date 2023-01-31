import { Country } from 'app/entities/Country';
import { Currency } from 'app/entities/Currency';
import { ValidateProfileError } from 'app/entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'SntSwetlana',
    LastName: 'Aderikhina',
    age: 40,
    country: Country.USA,
    first: 'Svetlana',
    city: 'Los-Angeles',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', LastName: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
