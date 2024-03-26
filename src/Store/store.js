import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Reducers/TodoReducer.js";

export const store = configureStore({
  reducer: TodoReducer,
});
