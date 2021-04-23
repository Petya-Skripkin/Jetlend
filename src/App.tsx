import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Demo } from "./pages";

import { urls } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={urls.MAIN} component={Demo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
