import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Main = props => (
  <main>
    <Header />
    {props.children}
    <Footer />
  </main>
);

export default Main;
