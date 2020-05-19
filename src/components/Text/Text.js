import React from "react";
import { TextStyled } from "./styles/Styled";

const Text = ({ text, className, type, size }) => {
  return <TextStyled className={className} type={type} size={size} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default Text;
