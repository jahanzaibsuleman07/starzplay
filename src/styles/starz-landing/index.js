import global from "./styles/global";
import { default as color } from "./styles/colors";
import { default as font } from "./styles/font";
import { default as breakpoints } from "./styles/breakpoints";
import { default as components } from "./components";

export const starzLanding = {
  ...global,
  color,
  font,
  breakpoints,
  components,
  locale: {
    dir: "ltr"
  }
};
