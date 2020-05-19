import React from "react";
import { WeAreStyled, HeadingStyled } from "./styles/Styled";

const WeAre = () => (
  <WeAreStyled>
    <span>
      We are <small>#1</small>
    </span>
    <HeadingStyled
      rank={2}
      text="The most popular streaming TV service in the region.<small>Source: IHS Markit Survey</small>"
      size="large"
      type="secondary"
      ariaLabelledby="The most popular streaming TV service in the region."
    />
  </WeAreStyled>
);

export default WeAre;
