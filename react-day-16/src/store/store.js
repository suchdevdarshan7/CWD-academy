import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './CounterSlice.js'



export const store = configureStore({
    reducer: {
        counter: CounterReducer,
    }
})