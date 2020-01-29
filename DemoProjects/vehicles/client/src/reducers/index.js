import { combineReducers } from "redux";
import VehicleReducers from "./VehicleReducers";
import { reducer as FormReducer } from "redux-form";

export default combineReducers({
  form: FormReducer,
  vehicles: VehicleReducers
});
