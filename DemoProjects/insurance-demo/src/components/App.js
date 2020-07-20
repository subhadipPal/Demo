import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "../history";
import LandingPage from "./home/LandingPage";
import { displayModules } from "../actions";
import Cart from "./home/Cart";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayModules());
  }, [dispatch]);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default App;
