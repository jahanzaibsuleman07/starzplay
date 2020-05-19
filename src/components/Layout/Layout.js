import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Main = ({ children, miniModeProps }) => (
  <main>
    <Header headerProps={miniModeProps} />
      {children}
    <Footer isMiniMode={miniModeProps.isMiniMode} />
  </main>
);

export default Main;
