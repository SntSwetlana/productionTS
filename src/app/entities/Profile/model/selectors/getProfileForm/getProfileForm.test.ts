import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'app/entities/Country';
import { Currency } from 'app/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const data = {
            username: 'SntSwetlana',
            LastName: 'Aderikhina',
            age: 40,
            country: Country.USA,
            first: 'Svetlana',
            city: 'Los-Angeles',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
