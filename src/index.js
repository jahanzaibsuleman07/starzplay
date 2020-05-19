import React from "react";
import ReactDOM from "react-dom";
import Landing from "./pages/Landing";
import { starzLanding as Theme } from "./styles/starz-landing";
import { Normalize } from "styled-normalize";
import GlobalStyles from "./styles/global-styles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Normalize />
    <GlobalStyles />
    <Landing />
  </ThemeProvider>, document.getElementById("root"));
