import React from "react";
import { IconStyled, PathStyled } from "./styles/Styled";

class Icon extends React.PureComponent {
  render() {
    const {
      width,
      height,
      name,
      description,
      viewBoxValue,
      className,
      direction,
      fill,
      fillRule
    } = this.props;

    return (
      <IconStyled
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBoxValue={viewBoxValue}
        aria-labelledby={description && "title"}
        direction={direction}
        fill={fill}
        fillRule={fillRule}
      >
        {description && <title id="title">{description}</title>}
        <PathStyled path={name} />
      </IconStyled>
    );
  }
}

export default Icon;
