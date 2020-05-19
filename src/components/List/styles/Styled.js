// List Styles

import styled from "styled-components";

export const UlStyled = styled.ul`
  font-size: ${props =>
    props.theme.font.size[props.size] || props.theme.font.size.default};
  color: ${props =>
    props.theme.color[props.color] || props.color || props.theme.color.primary};
  letter-spacing: ${props =>
    props.theme.locale.dir === "rtl" && props.theme.letterSpacing.small};
  ${props => props.theme.locale.dir === "rtl" && `white-space: nowrap;`}
`;

export const LiStyled = styled.li`
  display: inline-block;
  & + & {
    ${props =>
      `margin-${props.theme.locale.dir === "rtl" ? "right" : "left"}: 0.5em`};
  }
  &:not(:last-child) {
    &::after {
      content: "";
      display: inline-block;
      width: 1px;
      height: 1.3em;
      background-color: ${props =>
        props.theme.components.detail.info.color ||
        props.theme.color.primaryBlack};
      vertical-align: bottom;
      ${props =>
        `margin-${props.theme.locale.dir === "rtl" ? "right" : "left"}: 0.5em`};
    }
  }
`;

export const DlStyled = styled.dl`
  font-size: ${props =>
    props.theme.font.size[props.size] || props.theme.font.size.default};
  color: ${props =>
    props.theme.color[props.color] || props.color || props.theme.color.primary};
  line-height: ${props => props.theme.font.lineHeight.medium};
  letter-spacing: ${props =>
    props.theme.locale.dir === "rtl" && props.theme.letterSpacing.small};
  ${props => props.theme.locale.dir === "rtl" && `white-space: nowrap;`}
  ${props =>
    props.display === "inline" &&
    `
    overflow: hidden;
  `}
`;

export const DtStyled = styled.dt`
  font-weight: ${props => props.theme.font.weight.bold};
  ${props =>
    props.display === "inline" &&
    `
    margin-${props.theme.locale.dir === "rtl" ? "left" : "right"}: ${
      props.theme.spacing.default
    };
    float: ${props.theme.locale.dir === "rtl" ? "right" : "left"};
    clear: ${props.theme.locale.dir === "rtl" ? "right" : "left"};
  `}
`;

export const DdStyled = styled.dd`
  margin-bottom: ${props =>
    props.display === "inline"
      ? props.theme.spacing.default
      : props.theme.spacing.small};
  ${props =>
    props.display === "inline" &&
    `
    max-width: 80%;
    float: ${props.theme.locale.dir === "rtl" ? "right" : "left"};
  `}
`;
