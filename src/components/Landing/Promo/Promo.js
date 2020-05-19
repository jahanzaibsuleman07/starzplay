import React from "react";
import {
  PromoStyled,
  HeadingTitleStyled,
  HeadingStyled
} from "./styles/Styled";

const Promo = ({
  title,
  text,
  children,
  background = false,
  backgroundSize,
  direction,
  size,
  fileExtension
}) => (
  <>
    {title && <HeadingTitleStyled rank={2} text={title} size={size} />}
    <PromoStyled
      background={background}
      backgroundSize={backgroundSize}
      direction={direction}
      fileExtension={fileExtension}
    >
      <HeadingStyled
        rank={3}
        text={text}
        size={size}
        ariaLabelledby={text}
        direction={direction}
      />
      {children}
    </PromoStyled>
  </>
);

export default Promo;
