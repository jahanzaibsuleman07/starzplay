import React from "react";
import {
  PromoStyled,
  HeadingTitleStyled,
  HeadingStyled,
  SkeletonLoader
} from "./styles/Styled";

const Promo = ({
  title,
  text,
  children,
  background = false,
  backgroundSize,
  direction,
  size,
  fileExtension,
  isLoading
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
      {isLoading ? (
        <SkeletonLoader>
          <div className="rotate-box" />
        </SkeletonLoader>
      ) : (
        children
      )}
    </PromoStyled>
  </>
);

export default Promo;
