import styled from "styled-components";
import { Heading } from "../../../Heading";
import { media } from "../../../../styles/media";
import { shadowStyled } from "../../../../styles/shared-styles";

export const HeroStyled = styled.section`
  min-height: 60vh;
  text-align: center;
  background: ${props =>
    `url(${props.background}-xs.jpg)`} 0 100% / cover no-repeat ${props =>
  props.theme.color.greyBlack};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 ${props => props.theme.spacing.medium};
  content: "${props => props.backgroundLocale}";  
  &::after {
    ${props =>
      shadowStyled("bottom", "0", "100%", props.theme.color.blackRGB, 1)};
  }
  /* Media queries */
  ${media.medium`
    min-height: 80vh;
    background: ${props =>
      `url(${props.background}-lg.jpg)`} 0 100% / cover no-repeat ${props =>
    props.theme.color.greyBlack};
  `}
`;

export const HeadingStyled = styled(Heading)`
  z-index: ${props => props.theme.zIndex.base};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    margin-left: -1rem;
    display: block;
    text-align: center;
    box-sizing: border-box;
    height: 2rem;
    width: 2rem;
    border-style: solid;
    border-color: ${props => props.theme.color.secondary};
    border-width: 0px 1px 1px 0px;
    transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;
  }
  &:after {
    content: "";
    margin: 0 auto 0.5em auto;
    display: block;
    text-align: center;
    box-sizing: border-box;
    height: 2rem;
    width: 2rem;
    border-style: solid;
    border-color: ${props => props.theme.color.secondary};
    border-width: 0px 1px 1px 0px;
    transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;
  }
  user-select: none;
  /* Media queries */
  ${media.large`
    max-width: 43rem;
  `}
`;
