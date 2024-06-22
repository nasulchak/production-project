import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActipnCreatorType<R, A, Rj> = (arg: A) => AsyncThunkAction<R, A, {rejectValue: Rj}>

export class TestAsyncThunk<Return, Arg, Rejected> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActipnCreatorType<Return, Arg, Rejected>;

    constructor(actionCreator: ActipnCreatorType<Return, Arg, Rejected>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
