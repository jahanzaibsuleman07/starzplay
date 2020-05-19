// Player Theme properties

import color from "../styles/colors";
import global from "../styles/global";
import font from "../styles/font";

export default {
  controls: {
    height: "15%",
    icon: {
      size: "2.2em",
      color: color.grey
    }
  },
  subtitles: {
    color: color.primary,
    fontSize: {
      default: font.size.large,
      rtl: font.size.xlarge
    },
    lineHeight: font.lineHeight.medium,
    shadowColor: color.greyBlack,
    padding: global.spacing.large
  },
  tracks: {
    width: "25%",
    padding: "5%",
    iconSize: "1.7vw",
    iconSelectedSize: "1.05vw"
  }
};
