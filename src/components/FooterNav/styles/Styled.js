import styled from "styled-components";
import { Heading } from "../../Heading";
import { media } from "../../../styles/media";

export const HeadingStyled = styled(Heading)`
  margin-bottom: ${props => props.theme.spacing.small};
  /* Media queries */
  ${media.medium`
    display: inline-block;
    margin-right: ${props => props.theme.spacing.small};
    ${props =>
      `margin-${props.theme.locale.dir === "rtl" ? "left" : "right"}: ${
        props.theme.spacing.small
      }`};
    margin-bottom: 0;
    &&& {
      font-weight: ${props => props.theme.font.weight.light};
    }
  `}
`;

export const FooterNavStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.color.greyBlack};
  text-align: center;
  nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: ${props => props.theme.spacing.large};
    & a {
      color: ${props => props.theme.color.white};
    }
  }
  /* Media queries */
  ${media.medium`
    flex-direction: row;
    margin-bottom: ${props => props.theme.spacing.large};
    nav {
      flex-direction: row;
      margin: 0 ${props => props.theme.spacing.large};  
    }
  `}
`;
