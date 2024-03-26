import { createSlice } from "@reduxjs/toolkit";

const TodoReducers = createSlice({
  name: todos,
  initialState: {
    todos: null,
  },
  reducers: {
    addItem: (sate, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addItem } = TodoReducers.actions;
export default TodoReducers.reducer;
