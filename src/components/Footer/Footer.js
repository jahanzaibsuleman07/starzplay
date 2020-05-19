import React from "react";
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled, AppLogosStyled } from "./styles/Styled";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <FooterNav />
      <AppLogosStyled />
      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </FooterStyled>
  );
}

export default Footer;
