import React from "react";
import { BurgerStyled } from "./styles/Styled";

const Burger = ({ className, isOpened, onClick, ariaLabel }) => {
  return (
    <BurgerStyled
      className={className}
      isOpened={isOpened}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div />
      <div />
      <div />
    </BurgerStyled>
  );
};

export default Burger;
