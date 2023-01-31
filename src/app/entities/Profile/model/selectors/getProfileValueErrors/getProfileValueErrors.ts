import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileValueErrors = (state: StateSchema) => state.profile?.validateError;
