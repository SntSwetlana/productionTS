import {
    profileActions, profileReducer, ProfileSchema, updateProfileData, ValidateProfileError,
} from 'app/entities/Profile';
import { Country } from 'app/entities/Country';
import { Currency } from 'app/entities/Currency';

const data = {
    username: 'SntSwetlana',
    LastName: 'Aderikhina',
    age: 40,
    country: Country.USA,
    first: 'Svetlana',
    city: 'Los-Angeles',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toStrictEqual({ readonly: true });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data, form: { username: '' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });

    test('test update edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });
    // test extra reducer
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
