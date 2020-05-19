import React, { Component } from "react";
import { ButtonStyled, IconStyled, LabelStyled } from "./styles/Styled";

class Button extends Component {
  constructor(props) {
    super(props);
    this.props.onRef && this.props.onRef(this);
  }

  render() {
    const {
      label,
      icon,
      onClick,
      viewBox,
      className,
      size,
      spacing,
      buttonType,
      background,
      backgroundColor,
      dataSnUp,
      dataSnDown,
      dataSnLeft,
      dataSnRight,
      direction
    } = this.props;
    return (
      <ButtonStyled
        className={className}
        onClick={onClick}
        size={size}
        spacing={spacing}
        buttonType={buttonType}
        backgroundColor={backgroundColor}
        background={background}
        data-sn-up={dataSnUp}
        data-sn-down={dataSnDown}
        data-sn-left={dataSnLeft}
        data-sn-right={dataSnRight}
      >
        {icon && <IconStyled name={icon} viewBox={viewBox} buttonType={buttonType} direction={direction} />}
        {label && <LabelStyled buttonType={buttonType}>{label}</LabelStyled>}
      </ButtonStyled>
    );
  }
}

export default Button;
