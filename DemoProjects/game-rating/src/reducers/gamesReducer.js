import {
  FETCH_GAME_LIST,
  SORT_GAMES_BY_RATING,
  SET_GAME_RATING,
  RANDOMLY_RATE
} from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  games: []
};

const sortGames = (games, direction) => {
  games.sort((game1, game2) => {
    if (direction === "ASC") return game1.rating - game2.rating;
    else return game2.rating - game1.rating;
  });
  return games;
};
const gamesReducer = (state = INITIAL_STATE, action) => {
  const { games } = state;
  switch (action.type) {
    case FETCH_GAME_LIST:
      return { ...state, games: action.payload.games };
    case SORT_GAMES_BY_RATING:
      return { ...state, games: sortGames(_.cloneDeep(games), action.payload) };
    case SET_GAME_RATING:
      const previousGameWithSelectedRating = games.find(game => {
        return game.rating === action.payload.newRating;
      });
      const currentGame = games.find(game => {
        return game.rating === action.payload.oldRating;
      });

      previousGameWithSelectedRating.rating = action.payload.oldRating;
      currentGame.rating = action.payload.newRating;

      return { ...state, games: sortGames(_.cloneDeep(games), "ASC") };
    case RANDOMLY_RATE:
      const ratings = [];
      const clonedGamesForRandomizing = _.cloneDeep(games);
      const randomlyRatedGames = clonedGamesForRandomizing.map(game => {
        let newRating;
        while (ratings.length !== games.length) {
          newRating = Math.floor(Math.random() * 16);
          if (ratings.indexOf(newRating) === -1) {
            ratings.push(newRating);
            game.rating = newRating;
            break;
          }
        }
        return game;
      });
      return { ...state, games: sortGames(randomlyRatedGames, "ASC") };
    default:
      return state;
  }
};
export default gamesReducer;
