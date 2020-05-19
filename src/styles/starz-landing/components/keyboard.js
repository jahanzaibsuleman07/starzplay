// Keyboard Theme properties

import global from "../styles/global";
import color from "../styles/colors";

export default {
  key: {
    border: {
      width: "0.22rem",
      color: color.black,
      radius: global.borderRadius.medium
    },
    background: {
      default: color.greyBlack,
      focused: color.primary
    },
    color: {
      default: color.primary,
      focused: color.black
    },
    lineHeight: "1.5",
    padding: global.spacing.default,
    shadow: {
      size: "0 0 10px",
      color: color.black
    },
    disabledOpacity: 0.4
  },
  keyButton: {
    icon: {
      size: "1.6vw",
      color: {
        default: color.primary,
        focused: color.black
      }
    },
    paddingHorizontal: global.spacing.medium
  }
};
