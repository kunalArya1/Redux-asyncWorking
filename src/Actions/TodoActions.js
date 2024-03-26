import { isAtuhencated, addItem } from "../Reducers/TodoReducer";

export const isAuth = (dispatch, getState) => {
  dispatch(isAtuhencated(true));
};
