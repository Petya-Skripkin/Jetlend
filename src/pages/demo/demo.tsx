import React from "react";

import {
  Replenishment,
  Advantage,
  ReverseCredit,
  BorrowerCalculator,
  AboutAs,
} from "../../components";
import { BaseButton } from "../../styles/global";
import * as Styles from "./styles";

const Demo = () => {
  const [active, setActive] = React.useState("overview");
  const [value, setValue] = React.useState("");

  const Change = (event: string) => {
    setValue(event);
  };

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
      <Styles.ThirdBlock>
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
      </Styles.ThirdBlock>

      <ReverseCredit
        bgImage="./bgReverseCredit.png"
        description="Как получить оборотный кредит"
        step={[
          {
            title: "Пройдите регистрацию",
            isActive: true,
          },
          {
            title: "Получите предварительное решение",
            isActive: false,
          },
          {
            title: "Пройдите верификацию и получите деньги",
            isActive: false,
          },
        ]}
      />
      <Styles.Background>
        <Styles.BlockProcent>
          <Styles.Description>Калькулятор заемщика</Styles.Description>
          <Styles.Conteiner>
            <Styles.Content>
              <BorrowerCalculator
                title="Калькулятор заемщика"
                startSum={500000}
                finishSum={10000000}
                vailut="руб."
                type="руб."
                onChange={(e) => Change(e.toString())}
              />
              <br />
              <BorrowerCalculator
                title="Калькулятор заемщика"
                startSum={1}
                finishSum={12}
                vailut="Месяц"
                type="мес."
                onChange={(e) => console.log(e)}
              />
            </Styles.Content>
            <Styles.Payment>
              <Styles.Specification>Ежемесячный платеж</Styles.Specification>
              <Styles.Sum>{value}</Styles.Sum>
              <BaseButton>Получить кредит</BaseButton>
            </Styles.Payment>
          </Styles.Conteiner>
        </Styles.BlockProcent>

        <AboutAs
          icon={[
            "forbes",
            "merchant",
            "PBK",
            "statements",
            "vcru",
            "republic",
            "banki",
          ]}
        />
      </Styles.Background>
    </div>
  );
};

export default Demo;
