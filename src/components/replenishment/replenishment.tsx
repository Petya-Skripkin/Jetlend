import React from "react";
import { BaseButton } from "../../styles/global";

import * as Styles from "./styles";

interface IItem {
  text: string;
  active: boolean;
  onClick: () => void;
}

interface IReplen {
  item: IItem[];
  text: string[];
  bgImage: string;
  logo: string;
  title: string;
  btname: string;
  onClick: () => void;
}

const Replenishment = ({item, text, bgImage, logo, title, btname, onClick}: IReplen) => {
  return (
    <Styles.Gradient bgImage={bgImage}>
      <Styles.Content>
        <Styles.RMenu>
          {item.map((item, i) => (
            <Styles.RLebel>
              <Styles.RLink key={i} active={item.active} onClick={item.onClick}>
                {item.text}
              </Styles.RLink>
            </Styles.RLebel>
          ))}
        </Styles.RMenu>
        <Styles.Logo src={logo} alt="" />
      </Styles.Content>
      <Styles.Conteiner>
        <Styles.Paragraph>{title}</Styles.Paragraph>
        <Styles.List>
          {text.map((item) => (
            <Styles.Item>
              <Styles.Text>{item}</Styles.Text>
            </Styles.Item>
          ))}
        </Styles.List>
        <Styles.Button>{btname}</Styles.Button>
      </Styles.Conteiner>
    </Styles.Gradient>
  );
};

export default Replenishment;
