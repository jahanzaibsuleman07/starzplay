import React from "react";
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled, AppLogosStyled } from "./styles/Styled";

function Footer({ isMiniMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <FooterNav />
      {!isMiniMode && <AppLogosStyled />}
      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </FooterStyled>
  );
}

export default Footer;
