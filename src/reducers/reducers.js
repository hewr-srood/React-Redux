import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

// Reducer: How the action changes the state
const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});
export default allReducer;
