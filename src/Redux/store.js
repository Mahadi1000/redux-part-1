import { configureStore } from "@reduxjs/toolkit";
import tasbihSlice from "./features/tasbihSlice";
import todoSlice from "./features/todoSlice";

const store = configureStore({
  reducer: {
    tasbih: tasbihSlice,
    todo : todoSlice
  },
});

export default store;
