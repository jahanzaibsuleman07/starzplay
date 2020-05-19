import React from "react";
import { HeroStyled, HeadingStyled } from "./styles/Styled";

const Hero = ({ background, backgroundLocale = false, heroTitle, size }) => (
  <HeroStyled background={background} backgroundLocale={backgroundLocale}>
    <HeadingStyled
      rank={1}
      text={heroTitle}
      size={size}
      ariaLabelledby={heroTitle}
    />
  </HeroStyled>
);

export default Hero;
