import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import GameList from "../../components/GameList";
import { setGameRating } from "../../actions";
import { SET_GAME_RATING } from "../../actions/types";

const mockStore = configureStore([]);

describe("Game List component test", () => {
  let store = {};
  let wrappedComponent = {};

  beforeEach(() => {
    store = mockStore({
      games: {
        games: [
          {
            id: 0,
            title: "Prince of Persia: Sands of Time",
            rating: 6
          }
        ]
      }
    });
    store.dispatch = jest.fn();
    wrappedComponent = renderer.create(
      <Provider store={store}>
        <GameList />
      </Provider>
    );
  });

  it("should call fetchGamesList on componentDidMount", () => {
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it("should call SET_GAME_RATING action on dropdown value change", () => {
    renderer.act(() => {
      wrappedComponent.root.findByProps({ name: "ratingDropdown" }).props.onChange();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.dispatch).toHaveBeenCalledWith({
      payload: { newRating: NaN, oldRating: 6 },
      type: SET_GAME_RATING
    });
  });
});
