// Dropdown Theme properties

import color from "../styles/colors";
import global from "../styles/global";
import font from "../styles/font";

export default {
  background: {
    opened: color.greyDarkest
  },
  borderRadius: global.borderRadius.large,
  icon: {
    size: "1em",
    color: color.primary
  },
  arrow: {
    size: ".8em",
    color: color.primary
  },
  options: {
    backgroundColor: color.black,
    border: {
      radius: global.borderRadius.medium
    }
  },
  option: {
    font: {
      size: font.size.medium,
      color: color.primary
    },
    padding: `${global.spacing.default} ${global.spacing.xlarge}`
  }
};
