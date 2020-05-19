import React from "react";
import { MenuStyled, NavStyled, NavItemStyled, LinkStyled, StickyBannerStyled } from "./styles/Styled";

const Menu = ({ className, isOpened }) => {
  return (
    <MenuStyled className={className} isOpened={isOpened}>
      <NavStyled>
        <NavItemStyled>
          <LinkStyled href="">Explore</LinkStyled>
        </NavItemStyled>
        <NavItemStyled>
          <LinkStyled href="">Login</LinkStyled>
        </NavItemStyled>
      </NavStyled>
      <StickyBannerStyled title="Signup" />
    </MenuStyled>
  );
};

export default Menu;
