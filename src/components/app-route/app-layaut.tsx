import React from "react";

import AppHeader, { IHeader } from "./app-header/app-header";

import { LayoutContent } from "./styles";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  appHeader: IHeader;
}

const AppLayout = ({ children, appHeader }: IProps) => (
  <div>
    <AppHeader {...appHeader} />
    <LayoutContent>{children}</LayoutContent>
  </div>
);

export default AppLayout;
