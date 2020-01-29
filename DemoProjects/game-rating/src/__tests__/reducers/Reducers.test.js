import reducers from "../../reducers";
import expect from "expect";
import { FETCH_GAME_LIST, SORT_GAMES_BY_RATING } from "../../actions/types";

describe("Game rating reducers test", () => {
  const action = {
    payload: {
      games: [
        {
          id: 0,
          title: "Prince of Persia: Sands of Time",
          rating: 6
        },
        {
          id: 1,
          title: "Max Payne",
          rating: 4
        }
      ]
    }
  };
  it("should return the initial state", () => {
    expect(reducers(undefined, {})).toEqual({
      games: {
        games: []
      },
      form: {}
    });
  });
  it("should fetch game list", () => {
    action.type = FETCH_GAME_LIST;
    expect(reducers({}, action).games.games).toHaveLength(2);
  });
  it("should sort the games list in ascending order", () => {
    action.type = SORT_GAMES_BY_RATING;
    var oldState = {
      form: {},
      games: action.payload
    };
    action.payload = "ASC";
    expect(reducers(oldState, action).games.games).toEqual([
      {
        id: 1,
        title: "Max Payne",
        rating: 4
      },
      {
        id: 0,
        title: "Prince of Persia: Sands of Time",
        rating: 6
      }
    ]);
  });
});
