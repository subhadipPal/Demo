import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import UserReducer from "./UserReducer";

export default combineReducers({
  form: FormReducer,
  user: UserReducer
});
