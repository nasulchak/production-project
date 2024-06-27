import { Country } from 'shared/const/Country';
import { Currency } from 'entities/Currency/model/types/currency';

export enum ValidateProfileError {
    INCORECT_USER_DATA = 'INCORECT_USER_DATA',
    INCORECT_AGE = 'INCORECT_AGE',
    INCORECT_COUNTRY = 'INCORECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    'id'?: string,
    'first'?: string,
    'lastname'?: string,
    'age'?: number,
    'currency'?: Currency,
    'country'?: Country,
    'city'?: string,
    'username'?: string,
    'avatar'?: string
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    validateErrors?: ValidateProfileError[],
}
