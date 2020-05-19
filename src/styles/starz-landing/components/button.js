// Button Theme properties

import color from "../styles/colors";
import global from "../styles/global";
import font from "../styles/font";

export default {
  minWidth: {
    primary: "initial",
    secondary: "initial",
    icon: "initial"
  },
  border: {
    color: "transparent",
    colorFocused: color.primary,
    base: {
      primary: "none",
      secondary: "none",
      icon: null
    },
    radius: {
      primary: global.borderRadius.small,
      secondary: global.borderRadius.small,
      icon: "initial"
    }
  },
  padding: {
    primary: `${global.spacing.small} ${global.spacing.default}`,
    secondary: `${global.spacing.small} ${global.spacing.default}`,
    icon: "0"
  },
  font: {
    color: {
      primary: color.primary,
      secondary: color.black,
    },
    colorFocused: {
      primary: color.primary,
      secondary: color.black,
      icon: color.primary
    },
    weight: {
      primary: font.weight.regular,
      secondary: font.weight.regular,
      icon: font.weight.regular
    }
  },
  textTransform: {
    primary: null,
    secondary: null,
    icon: null
  },
  letterSpacing: {
    primary: global.letterSpacing.small,
    secondary: global.letterSpacing.small,
    icon: global.letterSpacing.small
  },
  background: {
    color: {
      primary: color.greyBlack,
      secondary: color.secondary,
      icon: "transparent"
    },
    colorFocused: {
      primary: color.greyDarkest,
      secondary: color.secondaryDark,
      icon: "transparent"
    },
    colorActive: {
      primary: color.greyDarker,
      secondary: color.secondaryLight,
      icon: "transparent"
    }
  },
  icon: {
    align: {
      primary: "middle",
      secondary: "middle",
      icon: "text-top"
    },
    margin: {
      primary: ".5em",
      secondary: ".5em",
      icon: "0"
    },
    color: {
      primary: color.primary,
      secondary: color.black,
      icon: color.secondary
    },
    colorFocused: {
      primary: color.black,
      secondary: color.black,
      icon: color.secondary
    }
  }
};