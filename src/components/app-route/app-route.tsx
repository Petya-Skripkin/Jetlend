import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AppLayout from "./app-layaut";
import { IHeader } from "./app-header/app-header";

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  appRoute: IHeader;
  [props: string]: any;
}

const AppRoute = ({ component: Component, appRoute, ...rest }: AppRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AppLayout
          appHeader={appRoute}
        >
          <Component {...props} />
        </AppLayout>
      )}
    />
  );
};

export default AppRoute;
