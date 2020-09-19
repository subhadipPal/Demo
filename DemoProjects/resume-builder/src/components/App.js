import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import createBrowserHistory from "../history";
import ResumeDisplay from "./resume/ResumeDisplay";
import UsernameForm from "./resume/UsernameForm";
import ErrorDisplay from "./resume/ErrorDisplay";

const App = () => {
  return (
    <div className="ui container">
      <Router history={createBrowserHistory}>
        <div>
          <Switch>
            <Route path="/" exact component={UsernameForm}></Route>
            <Route path="/resume/:username" exact component={ResumeDisplay}></Route>
            <Route path="/error/:username" exact component={ErrorDisplay}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
