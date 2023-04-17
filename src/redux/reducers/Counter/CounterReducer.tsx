import { createSlice } from "@reduxjs/toolkit";
import { CounterInterface } from "../../states/Counter/CounterState";

const initialState: CounterInterface = {
  count: 0,
};

// Creating a new Slice
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //Action
    increment: (state) => {
      state.count++;
    },

    //Action
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
