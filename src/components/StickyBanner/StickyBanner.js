import React from "react";
import {
  ButtonStyled,
  HeadingStyled,
  StickyBannerStyled
} from "./styles/Styled";

function StickyBanner({ className, title }) {
  return (
    <StickyBannerStyled className={className}>
      {title && (
        <HeadingStyled
          rank={5}
          text={title}
          size="default"
          ariaLabelledby={title}
        />
      )}
      <ButtonStyled
        label="Email"
        icon="email"
        buttonType="secondary"
        ariaLabel="Email"
      />
      <ButtonStyled
        label="Mobile"
        icon="phone"
        buttonType="primary"
        ariaLabel="Mobile"
      />
      <ButtonStyled
        label="Facebook"
        icon="facebook"
        buttonType={"primary"}
        backgroundColor={"#4760a0"}
        ariaLabel="Facebook"
      />
    </StickyBannerStyled>
  );
}

export default StickyBanner;
