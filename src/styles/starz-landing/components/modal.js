// Modal Theme properties

import color from "../styles/colors";
import global from "../styles/global";

export default {
  overlay: {
    colorRGB: color.blackRGB,
    opacity: 0.8
  },
  backgroundColor: "#26272C",
  borderRadius: global.borderRadius.small,
  padding: global.spacing.large,
  heading: {
    color: color.primary
  },
  text: {
    color: color.primary
  },
  button: {
    background: {
      default: color.greyBlack,
      focused: color.primary
    },
    color: {
      default: color.primary,
      focused: color.black
    }
  }
};
