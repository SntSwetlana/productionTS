// export interface CounterState{
//     value: number;
// }

import { CounterSchema } from 'app/entities/Counter';
import { UserSchema } from 'app/entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema{
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}
