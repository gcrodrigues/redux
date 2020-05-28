import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn, signOut } from "./actions";

import "./style.css";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {isLogged ? (
        <div className="wrapper">
          <h1 className="counter">Counter: {counter}</h1>
          <button className="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button className="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button className="signOut" onClick={() => dispatch(signOut())}>
            Sign Out
          </button>
        </div>
      ) : (
        <button
          className="signButton signIn"
          onClick={() => dispatch(signIn())}
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default App;
