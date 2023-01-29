import { Currency } from 'app/entities/Currency/model/types/currency';
import { Country } from 'app/entities/Country/model/types/country';

export interface Profile{
    first?: string,
    LastName?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
