import reducers from "../../reducers";
import expect from "expect";
import { ADD_USER, UPDATE_INTERFACE, NEW_GAME, DECLARE_WINNER } from "../../actions/types";

describe("Game reducers", () => {
  it("should return the initial state", () => {
    expect(reducers(undefined, {})).toEqual({
      game: {
        messages: [],
        user: "",
        winner: "",
        reset: false
      }
    });
  });

  it("should declare winner", () => {
    const action = {
      type: DECLARE_WINNER,
      payload: "Subhadip"
    };
    expect(reducers({}, action)).toEqual({
      game: {
        messages: [],
        user: "",
        winner: "Subhadip",
        reset: false
      }
    });
  });

  it("should add user", () => {
    const action = {
      type: ADD_USER,
      payload: { user: "Subhadip" }
    };
    expect(reducers({}, action)).toEqual({
      game: {
        messages: [],
        user: "Subhadip",
        winner: "",
        reset: false
      }
    });
  });

  it("should add user", () => {
    const action = {
      type: NEW_GAME
    };
    expect(reducers({}, action)).toEqual({
      game: {
        messages: [],
        user: "",
        winner: "",
        reset: false
      }
    });
  });

  it("should update the interface", () => {
    const action = {
      type: UPDATE_INTERFACE,
      payload: {
        message: ["a"]
      }
    };
    expect(reducers({}, action)).toEqual({
      game: {
        messages: [["a"]],
        user: "",
        winner: "",
        reset: false
      }
    });
  });
});
