import { combineReducers } from "redux";
import { ADD_USER, UPDATE_INTERFACE, NEW_GAME, DECLARE_WINNER } from "../actions/types";

var initialState = {
  messages: [],
  user: "",
  winner: "",
  reset: false
};

var gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INTERFACE:
      return { ...state, messages: [...state.messages, action.payload.message], reset: false };
    case ADD_USER:
      return { ...state, user: action.payload.user, reset: false };
    case DECLARE_WINNER:
      return { ...state, winner: action.payload, reset: false };
    case NEW_GAME:
      return { ...initialState, user: state.user };
    default:
      return state;
  }
};

export default combineReducers({
  game: gameReducer
});
