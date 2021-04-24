import React from "react";

import { Replenishment, Advantage } from "../../components";
import { ThirdBlock } from "./styles";

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
      <ThirdBlock>
        <Advantage
          label="Преимущества оборотного кредита в JetLend"
          block={[
            {
              title: "Решение за 10 секунд",
              text:
                "Просто загрузите два документы и мы оценим ваш бизнес почти моментально",
            },
            {
              title: "Всё онлайн",
              text: "Без поездок в офис - оформите кредит в личном кабинете",
            },
            {
              title: "Без залога",
              text:
                "Одобряем кредит для бизнеса на основании оборотов по расчетным счетам",
            },
          ]}
        />
      </ThirdBlock>
    </div>
  );
};

export default Demo;
