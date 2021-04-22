import { createGlobalStyle } from "styled-components";

export function fontFace(
  name: string,
  src: string,
  fontWeight = "normal",
  fontStyle = "normal"
) {
  return `
        @font-face{
            font-family: ${name};
            font-style: ${fontStyle};
            font-weight: ${fontWeight};
            src: url(${require("../../public/fonts/" + src + ".ttf")});
            src: url(${require("../../public/fonts/" +
              src +
              ".eot")}?#iefix) format("embedded-opentype"),
                url(${require("../../public/fonts/" +
                  src +
                  ".woff")}) format("woff"),
                url(${require("../../public/fonts/" +
                  src +
                  ".woff2")}) format("woff2"),
                url(${require("../../public/fonts/" +
                  src +
                  ".ttf")}) format("truetype"),
        }
    `;
}

const GlobalFonts = createGlobalStyle`
    ${fontFace("RedRing", "RedRing-Black/RedRing-Black")};
    ${fontFace("RedRing Light", "RedRing-Light/RedRing-Light", "light")};
    ${fontFace("RedRing Bold", "RedRing-Bold/RedRing-Bold", "bold")};
    ${fontFace("RedRing Medium", "RedRing-Medium/RedRing-Medium", "medium")};
    ${fontFace("RedRing Regular", "RedRing-Regular/RedRing-Regular", "regular")};

    /* body{
        font-family: 'RedRing';
    } */
`;

export default GlobalFonts;
