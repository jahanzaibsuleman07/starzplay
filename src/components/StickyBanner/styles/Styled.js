import styled from "styled-components";
import { Button } from "../../Button";
import { Heading } from "../../Heading";
import { media } from "../../../styles/media";

export const StickyBannerStyled = styled.div`
  position: sticky;
  bottom: 0;
  padding: ${props => props.theme.spacing.default} 0;
  text-align: center;
  background-color: ${props => props.theme.color.black};
  z-index: ${props => props.theme.zIndex.base};
`;

export const ButtonStyled = styled(Button)`
  margin: ${props => props.theme.spacing.small};
  /* Media queries */
  ${media.large`
    margin: ${props => props.theme.spacing.small};
  `}
`;

export const HeadingStyled = styled(Heading)`
  margin-top: ${props => props.theme.spacing.small};
  margin-bottom: ${props => props.theme.spacing.default};
`;
