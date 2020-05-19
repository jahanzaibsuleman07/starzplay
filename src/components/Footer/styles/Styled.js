import styled from "styled-components";
import { Logo } from "../../Logo";
import AppLogos from "../../../components/AppLogos";
import { media } from "../../../styles/media";

export const FooterStyled = styled.footer`
  padding: ${props => props.theme.spacing.large} 0;
  background: ${props => props.theme.color.greyBlack};
  text-align: center;
  small {
    font-size: ${props => props.theme.font.size.large};
    color: ${props => props.theme.color.white};
  }
`;

export const LogoStyled = styled(Logo)`
  width: 86px;
  height: 12px;
  margin: 0 ${props => props.theme.spacing.xsmall};
  /* Media queries */
  ${media.medium`
    width: 100px;
    height: 14px;
  `}
`;

export const AppLogosStyled = styled(AppLogos)`
  margin: 0 0 ${props => props.theme.spacing.large} 0;
  a {
    margin: 0 ${props => props.theme.spacing.small};
  }
`;
