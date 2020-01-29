import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import App from "../../components/App";

const mockStore = configureStore([]);

describe("App Component test", () => {
  let store = {};
  let wrappedComponent = {};

  beforeEach(() => {
    store = mockStore({
      games: []
    });
    store.dispatch = jest.fn();
    wrappedComponent = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(wrappedComponent.toJSON()).toMatchSnapshot();
  });
  it("should have a App", () => {
    expect(wrappedComponent.root.findByProps({ className: "App" })).toBeDefined();
  });
});
