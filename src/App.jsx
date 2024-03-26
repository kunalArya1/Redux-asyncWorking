import React from "react";
import { useDispatch } from "react-redux";
import { isAtuhencated } from "./Reducers/TodoReducer";

const App = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(isAtuhencated(true));
  };
  return (
    <div className=" text-red-600">
      <h1>Hello From App</h1>
      <button onClick={loginHandler} className=" p-4 bg-black m-3 rounded-lg">
        Login
      </button>
    </div>
  );
};

export default App;
