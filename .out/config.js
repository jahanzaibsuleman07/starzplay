import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { create } from "@storybook/theming";
import { starzTheme, applyTheme } from "./decorators";

const newTVviewports = {
  HD: {
    name: "TV-HD",
    styles: {
      width: "1280px",
      height: "720px"
    }
  },
  UHD: {
    name: "TV-FULL HD",
    styles: {
      width: "1920px",
      height: "1080px"
    }
  },
  FOURK: {
    name: "4K",
    styles: {
      width: "3840px",
      height: "2160px"
    }
  }
};

addParameters({
  options: {
    theme: create({
      brandTitle: "STARZ PLAY",
      brandImage: "./images/STARZPLAY.png",
      brandUrl: "https://bitbucket.org/starzplay/web-visual-library/"
    }),
    panelPosition: "right"
  },
  viewport: { viewports: { ...newTVviewports } },
  backgrounds: [{ name: "STARZ PLAY", value: starzTheme.background, default: true }]
});

const req = require.context("../src/components", true, /\.story\.js$/);

addDecorator(applyTheme(starzTheme), withKnobs);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

configure(loadStories, module);
