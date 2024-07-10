import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UIschema } from '../types/UISchema';

const initialState: UIschema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state: UIschema, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
