import React from "react";

import { Replenishment } from "../../components";

const Demo = () => {
  const [active, setActive] = React.useState("overview");

  return (
    <div>
      <Replenishment
        bgImage="./replenishment.png"
        logo="./logo-sk.png"
        title="Кредит на пополнение оборотных средств"
        btname="Получить кредит"
        item={[
          {
            text: "Обзор",
            active: active === "overview" && true,
            onClick: () => setActive("overview"),
          },
          {
            text: "Условия",
            active: active === "conditions" && true,
            onClick: () => setActive("conditions"),
          },
          {
            text: "Вопросы",
            active: active === "questions" && true,
            onClick: () => setActive("questions"),
          },
        ]}
        text={[
          "Сумма до 5 000 000 ₽",
          "Ставка от 11% годовых",
          "Срок до 12 месяцев",
        ]}
        onClick={() => 0}
      />
    </div>
  );
};

export default Demo;
