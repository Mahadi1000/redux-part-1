// src/features/tasbihSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = [

  { id: "subhanAllah", value: 0 },
  { id: "alhamdulillah", value: 0 },
  { id: "allahuAkbar", value: 0 },
]

console.log(initialState)
const tasbihSlice = createSlice({
  name: "tasbih",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(state.value);
      const counter = state.find((counter) =>
         counter.id === action.payload);
      if (counter.value < 33) {
        counter.value += 1;
      } else {
        alert("Next step");
        counter.value = 0;
      }
    },
    decrement: (state, action) => {
      console.log(action, state)
      const counter = state.find((counter) => counter.id === action.payload);

      if (counter.value > 0) {
        counter.value -= 1;
      }
    },
    reset: (state) => {
      state.forEach((counter) => (counter.value = 0));
    },
  },
});

export const { increment, decrement, reset } = tasbihSlice.actions;

export default tasbihSlice.reducer;
