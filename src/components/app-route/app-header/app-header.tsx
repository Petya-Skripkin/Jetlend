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
  onClick: () => void;
}

const AppHeader = ({ logo, menu, text, iconName, onClick }: IHeader) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Styles.Content>
      {!open && <Styles.Logo src={logo} />}
      <Styles.Navigation>
        <Styles.NavMenu>
          <Menu menu={menu} />
        </Styles.NavMenu>
        <BaseButton onClick={onClick}>
          {text} <Styles.LogIcon iconName={iconName} />
        </BaseButton>
      </Styles.Navigation>

      <Styles.BurgerButton open={open} onClick={() => setOpen(!open)}>
        {!open && <Styles.BurgerIcon iconName="menu" />}

        {open && (
          <>
            <Styles.BurgerList>
              {menu.map((item) => (
                <Styles.BurgerItems key={item.title}>
                  <Styles.BurgerLinks to={item.link}>
                    {item.title}
                  </Styles.BurgerLinks>
                </Styles.BurgerItems>
              ))}
            </Styles.BurgerList>
            <BaseButton onClick={() => 0}>
              {text}
            </BaseButton>
          </>
        )}
      </Styles.BurgerButton>
    </Styles.Content>
  );
};

export default AppHeader;
