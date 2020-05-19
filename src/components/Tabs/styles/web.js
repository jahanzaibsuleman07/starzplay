// TabItem bs styles

import { css } from "styled-components";
import { media } from "../../../styles/media";

export default {
  tabListStyles: css`
    display: flex;
    justify-content: space-between;
    /* Media queries */
    ${media.small`
      justify-content: space-around;
    `}
    ${media.large`
      display: block;
    `}
  `,
  tabStyles: css`
    /* Media queries */
    ${media.large`
      padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.large};
    `}
  `
};
