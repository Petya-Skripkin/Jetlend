import React from "react";

import * as Styles from "./styles";

interface IBlock {
  title: string;
  text: string;
}

interface IProps {
  label: string;
  block: IBlock[];
}

const Advantage = ({ label, block }: IProps) => {
  return (
    <>
      <Styles.Heading>{label}</Styles.Heading>
      <Styles.Content>
        {block.map((item) => (
          <Styles.Conteiner>
            <Styles.Paragraph>{item.title}</Styles.Paragraph>
            <Styles.Text>{item.text}</Styles.Text>
          </Styles.Conteiner>
        ))}
      </Styles.Content>
    </>
  );
};

export default Advantage;
