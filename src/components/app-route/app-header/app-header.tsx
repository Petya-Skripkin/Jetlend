import React from "react";
import { Menu } from "../..";

import { BaseButton } from "../../../styles/global";
import { iconName } from "../../icon/icon";
import { IMenu } from "../../menu/menu";
import * as Styles from "./styles";

export interface IHeader {
  logo: string;
  menu: IMenu[];
  text: string;
  iconName: iconName;
}

const AppHeader = ({logo, menu, text, iconName}: IHeader) => {
  return (
    <Styles.Content>
      <Styles.Logo src={logo} />
      <Styles.Navigation>
        <Styles.NavMenu>
          <Menu
            menu={menu}
          />
        </Styles.NavMenu>
        <BaseButton>{text} <Styles.LogIcon iconName={iconName} /></BaseButton>
      </Styles.Navigation>
    </Styles.Content>
  );
}

export default AppHeader;