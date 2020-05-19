import React from "react";
import { HeadingStyled } from "./styles/Styled";

const Heading = ({ rank, text, className, type, size, children }) => {
  const HeadingRank = HeadingStyled.withComponent(`h${rank}`);
  return !children ? (
    <HeadingRank className={className} type={type} size={size} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <HeadingRank className={className} type={type} size={size}>{children}</HeadingRank>
  );
};

export default Heading;
