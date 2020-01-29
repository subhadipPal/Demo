import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "../App";
import reducers from "../../reducers";
import Modal from "../Modal";

const wrappedComponent = shallow(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>
);

describe("Game View", () => {
  it("shows a App", () => {
    expect(wrappedComponent.contains(<App />)).toBe(true);
  });
});

describe("Game Modal", () => {
  const modalRoot = global.document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  const body = global.document.querySelector("body");
  body.appendChild(modalRoot);

  it("should render modalOuter div", () => {
    let component = mount(
      <Provider store={createStore(reducers, {})}>
        <Modal />
      </Provider>
    );
    expect(component.find(".modalOuter").exists()).toBeTruthy();
  });
});
