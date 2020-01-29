import {
  FETCH_VEHICLE_MAKES,
  FETCH_VEHICLE_MODELS,
  FETCH_VEHICLES,
  SET_VEHICLE_MAKE,
  SET_VEHICLE_MODEL,
  RESET_SELECTION,
  ERROR_OCCURRED
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VEHICLE_MAKES:
      return { ...state, makes: action.payload };
    case FETCH_VEHICLE_MODELS:
      return { ...state, models: action.payload };
    case FETCH_VEHICLES:
      return { ...state, vehicles: action.payload };
    case SET_VEHICLE_MAKE:
      return { ...state, selectedVehicleMake: action.payload };
    case SET_VEHICLE_MODEL:
      return { ...state, selectedVehicleModel: action.payload };
    case RESET_SELECTION:
      return { makes: state.makes };
    case ERROR_OCCURRED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
