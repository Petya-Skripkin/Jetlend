const urls = {
  check: (url: string) => url.replace("//", "/"),

  MAIN: "/",

  NOT_FOUND: "/404",
  INTERNAL_SERVER_ERROR: "/500"
};

export default urls;
