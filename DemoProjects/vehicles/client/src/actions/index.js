import {
  FETCH_VEHICLE_MAKES,
  FETCH_VEHICLE_MODELS,
  FETCH_VEHICLES,
  SET_VEHICLE_MAKE,
  SET_VEHICLE_MODEL,
  RESET_SELECTION,
  ERROR_OCCURRED
} from "./types";
import vehicles from "../api/vehicles";

export const fetchVehicleMakes = () => async dispatch => {
  try {
    const response = await vehicles.get("/makes");
    dispatch({ type: FETCH_VEHICLE_MAKES, payload: response.data });
  } catch (err) {
    dispatch({
      type: ERROR_OCCURRED,
      payload: err
    });
  }
};

export const fetchVehicleModels = make => async dispatch => {
  try {
    const response = await vehicles.get(`/models?make=${make}`);
    dispatch({ type: FETCH_VEHICLE_MODELS, payload: response.data });
  } catch (err) {
    dispatch({
      type: ERROR_OCCURRED,
      payload: err
    });
  }
};

export const fetchVehicles = model => async (dispatch, getState) => {
  try {
    const { selectedVehicleMake } = getState().vehicles;
    const response = await vehicles.get(`/vehicles?make=${selectedVehicleMake}&model=${model}`);
    dispatch({ type: FETCH_VEHICLES, payload: response.data });
  } catch (err) {
    dispatch({
      type: ERROR_OCCURRED,
      payload: err
    });
  }
};

export const setVehicleMake = make => {
  return {
    type: SET_VEHICLE_MAKE,
    payload: make
  };
};

export const setVehicleModel = model => {
  return {
    type: SET_VEHICLE_MODEL,
    payload: model
  };
};
export const resetSelection = () => {
  return {
    type: RESET_SELECTION
  };
};
