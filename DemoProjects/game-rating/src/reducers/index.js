import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import { reducer as FormReducer } from "redux-form";

export default combineReducers({
  form: FormReducer,
  games: gamesReducer
});
