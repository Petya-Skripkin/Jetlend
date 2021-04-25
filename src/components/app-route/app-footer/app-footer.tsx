import React from "react";
import { BaseButton } from "../../../styles/global";
import { iconName } from "../../icon/icon";

import * as Styles from "./styles";

export interface IFooter {
  logo: string;
  icons: {
    link: string;
    iconName: iconName;
  }[];
  links: {
    link: string;
    title: string;
  }[];
  skills: {
    link: string;
    title: string;
  }[];
  adress: string;
  license: string;
}

const AppFooter = ({ logo, icons, links, skills, adress, license }: IFooter) => {
  return (
    <Styles.Content>
      <p>
        <Styles.Logo src={logo} alt="" />
        <Styles.IconConteiner>
          {icons.map((item) => (
            <Styles.IconsLink href={item.link}>
              <Styles.Icons iconName={item.iconName} />
            </Styles.IconsLink>
          ))}
        </Styles.IconConteiner>
      </p>
      <Styles.LinkContent>
        {links.map((item) => (
          <Styles.Link href={item.link}>{item.title}</Styles.Link>
        ))}
      </Styles.LinkContent>
      <Styles.LinkContent>
        {skills.map((item) => (
          <Styles.Link href={item.link}>{item.title}</Styles.Link>
        ))}
      </Styles.LinkContent>
      <Styles.Adress>
        {adress}
      </Styles.Adress>
      <BaseButton>
        Войти <Styles.LogIcon iconName="entrance" />
      </BaseButton>
      <Styles.LastContent>
        {license}
        <br />
        <br />
        <Styles.Logo src="./logo-sk.png" />
      </Styles.LastContent>
    </Styles.Content>
  );
};

export default AppFooter;
