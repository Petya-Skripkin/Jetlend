import React from "react";
import { iconName } from "../icon/icon";

import * as Styles from "./styles";

interface IProps {
  icon: iconName[];
}

const AboutAs = ({icon}: IProps) => {

  return (
    <>
      <Styles.Title>
        СМИ о нас <Styles.Link href="#"> Наши партнеры</Styles.Link>
      </Styles.Title>
      <Styles.Conteiner>
        {icon.map(item => (
        <Styles.Block>
          <Styles.Logo iconName={item} />
        </Styles.Block>
        ))}
      </Styles.Conteiner>
    </>
  );
}

export default AboutAs;