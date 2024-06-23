import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActipnCreatorType<R, A, Rj> = (arg: A) => AsyncThunkAction<R, A, {rejectValue: Rj}>

jest.mock('axios');
const mokedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, Rejected> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActipnCreatorType<Return, Arg, Rejected>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigation: jest.MockedFn<any>;

    constructor(actionCreator: ActipnCreatorType<Return, Arg, Rejected>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.navigation = jest.fn();
        this.api = mokedAxios;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api, navigation: this.navigation });

        return result;
    }
}
