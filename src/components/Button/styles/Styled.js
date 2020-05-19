// Button styles

import styled from "styled-components";
import { Icon } from "../../Icon";
import flavor from "./web";

export const ButtonStyled = styled.button.attrs(() => ({ type: "button" }))`
  min-width: ${props =>
    props.theme.components.button.minWidth[props.buttonType] || props.theme.components.button.minWidth.primary};
  border: ${props => props.theme.components.button.border.base[props.buttonType] || "none"};
  border-radius: ${props =>
    props.theme.components.button.border.radius[props.buttonType] || props.theme.borderRadius.medium};
  color: ${props => props.theme.components.button.font.color[props.buttonType] || props.theme.color.primary};
  font-size: ${props => props.theme.font.size[props.size] || props.theme.font.size.medium};
  font-weight: ${props =>
    props.theme.components.button.font.weight[props.buttonType] || props.theme.components.button.font.weight.primary};
  padding: ${props =>
    props.theme.components.button.padding[props.buttonType] || props.theme.components.button.padding.primary};
  ${props => props.spacing && `margin: 0 ${props.theme.spacing[props.spacing]}`};
  background: ${props =>
    props.background
      ? `url(${props.background}) ${props.theme.components.button.background.color[props.buttonType] ||
          props.theme.color.greyBlack}`
      : props.backgroundColor ||
        props.theme.components.button.background.color[props.buttonType] ||
        props.theme.color.greyBlack};
  ${props => (props.background ? "background-size: cover;background-clip: padding-box;" : null)}
  letter-spacing: ${props =>
    props.theme.locale.dir !== "rtl" && props.theme.components.button.letterSpacing[props.buttonType]};
  text-transform: ${props => props.theme.components.button.textTransform[props.buttonType]};
  ${props => props.theme.locale.dir === "rtl" && `white-space: nowrap;`}
  ${flavor.buttonStyles};
`;

export const IconStyled = styled(Icon)`
  width: 1em;
  height: 1em;
  vertical-align: ${props => props.theme.components.button.icon.align[props.buttonType]};
  ${props =>
    `margin-${props.theme.locale.dir === "rtl" ? "left" : "right"}: ${
      props.theme.components.button.icon.margin[props.buttonType]
    }`};
  fill: ${props => props.theme.components.button.icon.color[props.buttonType] || props.theme.color.primary};
  ${ButtonStyled}:hover, .focused & {
    fill: ${props => props.theme.components.button.icon.colorFocused[props.buttonType] || props.theme.color.secondary};
  }
`;

export const LabelStyled = styled.span`
  vertical-align: ${props => (props.buttonType !== "icon" ? "middle" : null)};
  ${props => props.buttonType !== "icon" && props.theme.locale.dir === "rtl" && `white-space: nowrap;`}
  > small {
    font-size: 70%;
    display: inline-block;
    ${props => `margin-${props.theme.locale.dir !== "rtl" ? "left" : "right"}: ${props.theme.spacing.default}`};
    ${props => props.theme.locale.dir === "rtl" && `white-space: nowrap;`}
  }
  ${props =>
    props.buttonType === "icon" &&
    `
    font-size: .6em;
    display: block;
    position: absolute;
    margin-top: .5em;
    opacity: 0;
    transition: opacity ease 0.2s;
    ${flavor.labelStyles}
  `};
`;
