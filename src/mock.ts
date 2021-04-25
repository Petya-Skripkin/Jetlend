import { IFooter } from "./components/app-route/app-footer/app-footer";
import { IHeader } from "./components/app-route/app-header/app-header";

export const MAIN_MENU: IHeader = {
  logo: "header-logo.png",
  text: "Войти",
  iconName: "entrance",
  menu: [
    {
      title: "инвесторам",
      link: "/main",
    },
    {
      title: "предпринимателям",
      link: "/dev",
    },
    {
      title: "о платформе",
      link: "/web",
    },
    {
      title: "новости",
      link: "/get",
    },
  ],
  onClick: () => 0
};

export const MAIN_FOOTER: IFooter = {
  logo: "./jetblack.png",
  icons: [
    {
      link: "#",
      iconName: "fb",
    },
    {
      link: "#",
      iconName: "inst",
    },
    {
      link: "#",
      iconName: "tg",
    },
    {
      link: "#",
      iconName: "youtube",
    },
  ],
  links: [
    {
      link: "#",
      title: "инвесторам",
    },
    {
      link: "#",
      title: "предпринимателям",
    },
    {
      link: "#",
      title: "партнерам",
    },
  ],
  skills: [
    {
      link: "#",
      title: "документы",
    },
    {
      link: "#",
      title: "о платформе",
    },
    {
      link: "#",
      title: "новости",
    },
  ],
  adress: `Москва, территория инновационного центра «Сколково», ул. Нобеля, д. 5,
        эт/пом/раб 2/8/2`,
  license: `© 2018 —2021 Все права защищены ООО «ДжетЛэнд», официальный сайт
        Лицензия ЦБ РФ №18`,
};
