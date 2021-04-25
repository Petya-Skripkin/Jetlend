import React from "react";

import * as Styles from "./styles";

interface IProps {
  title: string;
  text: string;
}

const Partner = ({title, text}: IProps) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Styles.Content>
      {visible ? (
        <Styles.Video
          src="https://www.youtube.com/embed/uB3-KONklbc?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Styles.Video>
      ) : (
        <Styles.Image
          onClick={() => setVisible(!visible)}
          src="./video.png"
          alt=""
        />
      )}
      <Styles.Conteiner>
        <Styles.Description>{title}</Styles.Description>
        <Styles.Text>
          {text}
        </Styles.Text>
      </Styles.Conteiner>
    </Styles.Content>
  );
}

export default Partner;