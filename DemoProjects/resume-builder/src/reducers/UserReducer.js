import { GITHUB_DATA_FETCH_SUCCESS, GITHUB_DATA_FETCH_FAILURE } from "../actions/types";

const INITIAL_STATE = {
  user: []
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GITHUB_DATA_FETCH_SUCCESS:
      return { ...state, user: action.payload };
    case GITHUB_DATA_FETCH_FAILURE:
      return { ...state, user: [] };
    default:
      return state;
  }
};
export default UserReducer;
