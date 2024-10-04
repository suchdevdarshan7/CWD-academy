import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: function (state) {
            state.count += 1;
        },
        decrement: function (state) {
            state.count -= 1;
        }
    }
})

export const { increment, decrement } = CounterSlice.actions;

export default CounterSlice.reducer;