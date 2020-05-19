// Tabs Theme properties

import color from "../styles/colors";
import global from "../styles/global";
import font from "../styles/font";

export default {
  backgroundColor: color.greyBlack,
  align: "center",
  color: color.primary,
  padding: global.spacing.large,
  tab: {
    border: {
      width: global.spacing.xsmall,
      color: {
        default: color.greyDarkest,
        active: color.secondary
      }
    },
    font: {
      color:{
        default: color.greyDarkest,
        active: color.primary
      },
      size: font.size.default
    },
    icon: {
      size: "2.4em",
      color: {
        default: color.greyDarkest,
        active: color.primary
      }
    }
  }
};
