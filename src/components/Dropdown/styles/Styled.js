import styled from "styled-components";
import { Icon } from "../../Icon";
import { media } from "../../../styles/media";

export const DropdownStyled = styled.div`
  width: ${props => props.width || null};
  cursor: pointer;
  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.default};
  background-color: ${props =>
    props.isOpened && props.theme.components.dropdown.background.opened};
  border-radius: ${props => props.theme.components.dropdown.borderRadius};
  /* Media queries */
  ${media.medium`
    position: relative;
  `}
`;

export const IconStyled = styled(Icon)`
  width: ${props => props.theme.components.dropdown.icon.size};
  height: ${props => props.theme.components.dropdown.icon.size};
  fill: ${props => props.theme.components.dropdown.icon.color};
  display: inline-block;
  vertical-align: text-top;
  ${props =>
    `margin-${props.theme.locale.dir === "rtl" ? "left" : "right"}: ${
      props.theme.spacing.small
    };`}
`;

export const IconArrowStyled = styled(Icon)`
  width: ${props => props.theme.components.dropdown.arrow.size};
  height: ${props => props.theme.components.dropdown.arrow.size};
  fill: ${props => props.theme.components.dropdown.arrow.color};
  transform: ${props => props.isOpened && "rotate(180deg)"};
  transition: transform ease-out .2s;
  display: inline-block;
  ${props =>
    `margin-${props.theme.locale.dir === "rtl" ? "right" : "left"}: ${
      props.theme.spacing.small
    };`}
  /* Remove margin when IconArrowStyled is sibling of IconStyled */
  ${IconStyled} + & {
    margin: 0;
  }
`;

export const OptionsStyled = styled.ul`
  position: absolute;
  background-color: ${props =>
    props.theme.components.dropdown.options.backgroundColor};
  padding: ${props => props.theme.spacing.default} 0;
  z-index: ${props => props.theme.zIndex.high};
  top: 7%;
  left: 0;
  right: 0;
  /* Media queries */
  ${media.medium`
    border-radius: ${props =>
      props.theme.components.dropdown.options.border.radius};
    left:  ${props =>
      props.optionsPosition === "center"
        ? "50%"
        : props.optionsPosition === "left"
        ? "0"
        : "initial"};
    right:  ${props =>
      props.optionsPosition === "center"
        ? "initial"
        : props.optionsPosition === "left"
        ? "initial"
        : "0"};
    transform: ${props =>
      props.optionsPosition === "center" && `translate(-50%)`};
  `}

  ${media.large`
    top: 100%;
  `}
`;

export const OptionStyled = styled.li`
  padding: ${props => props.theme.components.dropdown.option.padding};
  font-size: ${props => props.theme.components.dropdown.option.font.size};
  font-weight: ${props =>
    props.isSelected
      ? props.theme.font.weight.bold
      : props.theme.font.weight.light};
  color: ${props =>
    props.theme.components.dropdown.option.font.color ||
    props.theme.color.primary};
  transition: font-weight ease 0.2s;
  text-align: center;
  &:hover {
    font-weight: ${props => props.theme.font.weight.bold};
  }
`;
