import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import App from "../components/App";
import history from "../history";
import { displayModules } from "../actions";
import { DISPLAY_MODULES } from "../actions/types";

const mockStore = configureStore([]);

describe("App Component test", () => {
  let store = {};
  let wrappedComponent = {};
  const expectedActions = {
    type: DISPLAY_MODULES,
    payload: [
      {
        id: 0,
        icon: "bicycle",
        name: "Bike",
        coverageMin: 0,
        coverageMax: 3000,
        risk: 30
      },
      {
        id: 1,
        icon: "gem",
        name: "Jewelry",
        coverageMin: 500,
        coverageMax: 10000,
        risk: 5
      },
      {
        id: 2,
        icon: "microchip",
        name: "Electronics",
        coverageMin: 500,
        coverageMax: 6000,
        risk: 35
      },
      {
        id: 3,
        icon: "football ball",
        name: "Sports Equipment",
        coverageMin: 0,
        coverageMax: 20000,
        risk: 30
      }
    ]
  };
  beforeEach(() => {
    store = mockStore({
      data: {
        modules: [],
        cart: [],
        total: 0
      }
    });
    store.dispatch = jest.fn(displayModules);
    wrappedComponent = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(wrappedComponent.toJSON()).toMatchSnapshot();
  });
  it("should have an app from Landing Page", () => {
    expect(wrappedComponent.root.findByProps({ className: "app" })).toBeDefined();
  });

  it("should show landing page for default route", () => {
    expect(wrappedComponent.root.findByProps({ className: "shopping cart icon" })).toBeDefined();
  });
  it("should show cart page for /cart route", () => {
    history.push("/cart");
    expect(wrappedComponent.root.findByProps({ className: "backward icon" })).toBeDefined();
  });
  it("should redirect to landing page for unmatched 404 routes", () => {
    history.push("/someRandomRoute");
    expect(wrappedComponent.root.findByProps({ className: "shopping cart icon" })).toBeDefined();
  });
  it("should dispatch displayModules action on app mount", async () => {
    const actualAction = await store.dispatch();
    expect(actualAction).toEqual(expectedActions);
  });
});
