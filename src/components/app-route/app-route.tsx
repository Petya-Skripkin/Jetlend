import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { Redirect } from "react-router";

import AppLayout from "./app-layaut";

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  [props: string]: any;
}

const AppRoute = ({
  component: Component,
  menuItems,
  roles,
  ...rest
}: AppRouteProps) => {
      <Route
        {...rest}
        render={props => (
          <AppLayout>
            <Component {...props} />
          </AppLayout>
        )}
      />
  }

export default AppRoute;