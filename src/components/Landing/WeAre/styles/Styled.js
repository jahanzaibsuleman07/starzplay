import styled from "styled-components";
import { Heading } from "../../../Heading";
import { media } from "../../../../styles/media";

export const WeAreStyled = styled.article`
  background-color: ${props => props.theme.color.secondary};
  padding: ${props => props.theme.spacing.large} 0;
  margin: ${props => props.theme.spacing.large} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: relative;
    width: 8em;
    height: 8em;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.color.black};
    color: ${props => props.theme.color.white};
    border: 3px solid ${props => props.theme.color.black};
    background-clip: content-box;
    font-size: ${props => props.theme.font.size.large};
    &:after {
      content: "";
      position: absolute;
      top: -10px;
      bottom: -10px;
      left: -10px;
      right: -10px;
      border-radius: 50%;
      border: 1px solid ${props => props.theme.color.black};
    }

    &:before {
      content: "";
      position: absolute;
      top: -18px;
      bottom: -18px;
      left: -18px;
      right: -18px;
      border-radius: 50%;
      border: 1px solid ${props => props.theme.color.black};
    }
  }
  small {
    font-size: ${props => props.theme.font.size.largest};
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: ${props => props.theme.font.lineHeight.small};
  }
`;

export const HeadingStyled = styled(Heading)`
  &&& {
    color: ${props => props.theme.color.black};
    line-height: ${props => props.theme.spacing.medium};
  }
  max-width: 6em;
  margin: 0 0 0 ${props => props.theme.spacing.large};

  > small {
    display: block;
    margin-top: ${props => props.theme.spacing.medium};
    font-weight: ${props => props.theme.font.weight.regular};
    font-size: ${props => props.theme.font.size.small};
  }

  /* Media queries */
  ${media.medium`
    max-width: 12em;
    margin: 0 ${props => props.theme.spacing.default} 0
    ${props => props.theme.spacing.large};
  `}
`;
