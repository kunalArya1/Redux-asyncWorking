import { isAtuhencated, addItem } from "../Reducers/TodoReducer";

export const isAuth = (status) => (dispatch, getState) => {
  dispatch(isAtuhencated(status));
};
