import { FETCH_GAME_LIST, SET_GAME_RATING, SORT_GAMES_BY_RATING, RANDOMLY_RATE } from "./types";
import axios from "axios";

export const fetchGameList = () => async dispatch => {
  var response = await axios.get("data/data.json");
  dispatch({
    type: FETCH_GAME_LIST,
    payload: response.data
  });
};

export const setGameRating = (newRating, oldRating) => {
  return {
    type: SET_GAME_RATING,
    payload: { newRating, oldRating }
  };
};

export const sortGamesByRating = sortDirection => {
  return {
    type: SORT_GAMES_BY_RATING,
    payload: sortDirection
  };
};

export const randomlyRateGames = () => {
  return {
    type: RANDOMLY_RATE
  };
};
