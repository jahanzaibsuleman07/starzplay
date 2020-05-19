// Input Theme properties

import color from "../styles/colors";
import font from "../styles/font";

export default {
  border: {
    width: "0.15rem",
    color: {
      default: color.greyDarkest,
      active: color.secondary
    }
  },
  padding: 0,
  font: {
    size: font.size.medium,
    color: {
      default: color.greyDarkest,
      active: color.primary
    }
  },
  label: {
    color: color.greyDarkest
  },
  iconError: {
    size: "1rem"
  }
};
