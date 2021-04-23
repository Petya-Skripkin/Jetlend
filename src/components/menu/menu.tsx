import React from "react";
import { useHistory } from "react-router-dom";

import * as Styles from "./styles";
import _get from "lodash/get";

export interface IMenu {
  title: string;
  link: string;
}

interface IProps {
  menu: IMenu[];
}

const Menu = ({ menu }: IProps) => {
  const history = useHistory();
  const path = _get(history, "location.pathname", "/");

  return (
      <Styles.Content>
        {menu.map((item) => (
          <Styles.Item>
            <Styles.ItemLink
              isActive={
                path === item.link || path.includes(item.link)
                  ? true
                  : false
              }
              to={item.link}
            >
              {item.title}
            </Styles.ItemLink>
          </Styles.Item>
        ))}
      </Styles.Content>
  );
};

export default Menu;
