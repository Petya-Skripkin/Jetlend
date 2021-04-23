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
};
