// Toast Theme properties

import global from "../styles/global";
import color from "../styles/colors";
import font from "../styles/font";

export default {
  font: {
    size: font.size.medium,
    color: color.primary,
    shadowColor: color.greyDarker
  },
  margin: "4vw",
  borderRadius: global.borderRadius.small,
  backgroundColor: color.greyDarker,
  icon: {
    size: {
      default: "1em",
      indicator: "1.5em"
    },
    color: color.primary
  },
  autoHideTimeout: 5,
  transition: {
    duration: 0.2
  }
};
