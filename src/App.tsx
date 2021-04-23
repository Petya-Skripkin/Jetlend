import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Demo } from "./pages";

import { urls } from "./constants";

import { AppRoute } from "./components";
import { MAIN_MENU } from "./mock";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute
          appRoute={MAIN_MENU}
          component={() => <Route path={urls.MAIN} component={Demo} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
