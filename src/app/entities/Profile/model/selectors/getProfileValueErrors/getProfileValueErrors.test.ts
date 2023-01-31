import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'app/entities/Profile';
import { getProfileValueErrors } from './getProfileValueErrors';

describe('getProfileValueErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValueErrors(state as StateSchema)).toEqual([
            ValidateProfileError.NO_DATA,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValueErrors(state as StateSchema)).toEqual(undefined);
    });
});
