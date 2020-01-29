import { ADD_USER, UPDATE_INTERFACE, NEW_GAME, DECLARE_WINNER } from "./types";

export const updateInterface = message => dispatch => {
  var { result, userId } = message.msgData;
  dispatch({ type: UPDATE_INTERFACE, payload: { message } });
  if (result === 1) {
    dispatch({
      type: DECLARE_WINNER,
      payload: userId
    });
  }
};

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: { user }
  };
};

export const startNewGame = () => {
  return {
    type: NEW_GAME
  };
};
