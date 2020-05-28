import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default reducers;
