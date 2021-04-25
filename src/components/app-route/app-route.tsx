import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AppLayout from "./app-layaut";
import { IHeader } from "./app-header/app-header";
import { IFooter } from "./app-footer/app-footer";

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  appRoute: IHeader;
  appFooter: IFooter;
  [props: string]: any;
}

const AppRoute = ({ component: Component, appRoute, appFooter, ...rest }: AppRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AppLayout
          appHeader={appRoute}
          appFooter={appFooter}
        >
          <Component {...props} />
        </AppLayout>
      )}
    />
  );
};

export default AppRoute;
