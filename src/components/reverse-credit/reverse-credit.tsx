import React from "react";

import * as Styles from "./styles";

interface IStep {
  title: string;
  isActive: boolean;
}

interface IProps {
  bgImage: string;
  description: string;
  step: IStep[];
}

const ReverseCredit = ({ bgImage, step, description }: IProps) => {
  return (
    <Styles.Gradient bgImage={bgImage}>
      <Styles.Description>{description}</Styles.Description>
      <Styles.Container>
        {step.map(({ title, isActive }, i) => (
          <Styles.StepItem key={title}>
            <Styles.Circle isActive={isActive}>{i + 1}</Styles.Circle>
            <Styles.Title isActive={isActive}>{title}</Styles.Title>
          </Styles.StepItem>
        ))}
      </Styles.Container>
    </Styles.Gradient>
  );
};

export default ReverseCredit;
