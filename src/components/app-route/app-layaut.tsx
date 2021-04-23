import React from "react";

import { LayoutContent } from "./styles";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
}

const AppLayout = ({ children }: IProps) => (
  <div>
    <LayoutContent>{children}</LayoutContent>
  </div>
);

export default AppLayout;
