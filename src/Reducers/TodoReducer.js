import { createSlice } from "@reduxjs/toolkit";

const TodoReducers = createSlice({
  name: todos,
  initialState: {
    todos: null,
    isAuth: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.todos = action.payload;
    },
    isAtuhencated: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { addItem ,isAtuhencated} = TodoReducers.actions;
export default TodoReducers.reducer;
