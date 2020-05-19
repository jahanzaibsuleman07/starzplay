// Button web styles

import { css } from "styled-components";

export default {
  buttonStyles: css`
    transition: background-color ease 0.2s;
    &:hover {
      background-color: ${props =>
        props.backgroundColor
          ? /* TODO: Try to find an alternative for color-functions in styled-components. styled-polished ? */
            props.backgroundColor
          : props.theme.components.button.background.colorFocused[props.buttonType] || props.theme.color.primary};
      border-color: ${props => props.theme.components.button.border.colorFocused};
      color: ${props =>
        props.theme.components.button.font.colorFocused[props.buttonType] || props.theme.color.greyBlack};
      cursor: pointer;
    }
    &:active {
      background-color: ${props =>
        props.backgroundColor
          ? /* TODO: Try to find an alternative for color-functions in styled-components. styled-polished ? */
            props.backgroundColor
          : props.theme.components.button.background.colorActive[props.buttonType] || props.theme.color.primary};
    }
  `,
  labelStyles: css`
    &:hover {
      opacity: 1;
    }
  `
};
