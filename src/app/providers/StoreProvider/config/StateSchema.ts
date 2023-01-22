// export interface CounterState{
//     value: number;
// }

import { CounterSchema } from 'app/entities/Counter';
import { UserSchema } from 'app/entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'app/entities/Profile';

export interface StateSchema{
    counter: CounterSchema;
    user: UserSchema;

    //
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap : () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}
