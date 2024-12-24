// src/combiner.js
import { combineReducers } from "redux";
import counterReducer from "./counterSlice"; // Ensure path is correct
import favouriteReducer from "./favouriteSlice"; // Ensure path is correct
import loginReducer from "./loginSlice"; // Ensure path is correct
const rootReducer = combineReducers({
  counter: counterReducer,
  favourite: favouriteReducer,
  login: loginReducer,
});

export default rootReducer;
