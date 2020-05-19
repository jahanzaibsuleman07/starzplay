// Icon styles

import styled from "styled-components";

export const IconStyled = styled.svg.attrs(props => ({
  viewBox: props.viewBoxValue ? props.viewBoxValue : props.theme.components.icon.viewBox
}))`
  display: inline-block;
  vertical-align: middle;
  /* RTL transformation */
  ${props => props.direction === "rtl" && "transform: rotateY(180deg);"}
`;

export const PathStyled = styled.path.attrs(props => ({
  d: props.theme.components.icon.list[props.path] && props.theme.components.icon.list[props.path].path
}))`
  fill: ${props =>
    props.fill || (props.theme.components.icon.list[props.path] && props.theme.components.icon.list[props.path].fill)};
`;