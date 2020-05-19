import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Font face rules */
  @font-face {
    font-family: "primary";
    src: local(MuseoSansW00-100), url("/fonts/primary/MuseoSansW00-100.woff2") format("woff2"),
      url("../fonts/primary/MuseoSansW00-100.woff") format("woff");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "primary";
    src: local(MuseoSansW00-300), url("/fonts/primary/MuseoSansW00-300.woff2") format("woff2"),
      url("../fonts/primary/MuseoSansW00-300.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "primary";
    src: local(MuseoSansW00-700), url("/fonts/primary/MuseoSansW00-700.woff2") format("woff2"),
      url("../fonts/primary/MuseoSansW00-700.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "secondary";
    src: local(GESSTwoLight), url("/fonts/secondary/GESSTwoLight.ttf") format("truetype");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "secondary";
    src: local(GESSTwoMedium), url("/fonts/secondary/GESSTwoMedium.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "secondary";
    src: local(GESSTwoBold), url("/fonts/secondary/GESSTwoBold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  /* Global rules */
  * {
    margin: 0;
    padding: 0;
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
  :focus {
    outline: 0;
  }
  ul {
    list-style: none;
  }
  a, a:focus, a:hover {
    text-decoration: none;
  }
  strong {
    font-weight: ${props => props.theme.font.weight.bold};
  }

  /* Layout */
  html {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    background-color: ${props => props.theme.background};
    font-family: "primary", "secondary", sans-serif;
    /* TODO: Try to explain better or find a better way to scale typography smoothly across viewport widths. 
      Now this method is working fine
      Where: * 0.2778 = 100 * font_Size_Difference / viewport_Width_Difference
    */ 
    font-size: calc(0.875rem + ((1vw - 4.8px) * 0.2778));
    &.noScrolling {
      overflow: hidden;
    }
    @media (min-width: 1920px) {
      font-size: 18px;
    }
    @media (min-width: 2560px) {
      font-size: 24px;
    }
  }
`;
