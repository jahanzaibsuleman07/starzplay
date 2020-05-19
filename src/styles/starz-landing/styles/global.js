import color from "./colors";

export default {
  // Background for the app
  background: color.black,
  backgroundRGB: "26, 26, 28",

  // Base space layout based in % values
  baseLayoutPaddingBs: 5,
  baseLayoutPaddingWeb: 5,

  // Border radius
  borderRadius: {
    small: "8px",
    medium: "16px",
    large: "32px"
  },

  // Letter Spacing
  letterSpacing: {
    small: "0.6px",
    medium: "1.2px",
    large: "2.4px"
  },

  // Spacing
  spacing: {
    xsmall: ".225em",
    small: ".5em",
    default: "1em",
    medium: "1.22em",
    large: "2.4em",
    xlarge: "4.8em"
  },

  // Z-index
  zIndex: {
    higher: 100, 
    high: 50,
    base: 10,
    low: 1,
    below: -1
  }
};
