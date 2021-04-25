import React from "react";
import AppFooter, { IFooter } from "./app-footer/app-footer";

import AppHeader, { IHeader } from "./app-header/app-header";

import { LayoutContent } from "./styles";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  appHeader: IHeader;
  appFooter: IFooter;
}

const AppLayout = ({ children, appHeader, appFooter }: IProps) => (
  <div>
    <AppHeader {...appHeader} />
    <LayoutContent>{children}</LayoutContent>
    <AppFooter {...appFooter}/>
  </div>
);

export default AppLayout;
