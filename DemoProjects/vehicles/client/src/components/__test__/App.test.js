import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "../../components/App";
import reducers from "../../reducers";

it("Shows Select Cars", () => {
  const div = document.createElement("div");
  const store = createStore(reducers, applyMiddleware(thunk));
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );

  console.log(div.innerHTML);
  expect(div.innerHTML).toContain("Select Cars");

  // this one is a cleanup step where we to unmount the component
  // for test performance after the test is executed.
  ReactDOM.unmountComponentAtNode(div);
});
