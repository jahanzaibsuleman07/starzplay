import React from "react";
import { OptionStyled } from "./styles/Styled";

export const Option = ({ onSelect, option, isSelected }) => {
  const onSelectHandler = e => {
    e.preventDefault();
    onSelect(option);
  };

  return (
    <OptionStyled onClick={onSelectHandler} title={option.content} isSelected={isSelected}>
      {option.content}
    </OptionStyled>
  );
};
