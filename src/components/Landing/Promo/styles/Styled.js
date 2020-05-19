import styled from "styled-components";
import { Heading } from "../../../Heading";
import { media } from "../../../../styles/media";
import { pseudo } from "../../../../styles/shared-styles";

export const PromoStyled = styled.article`
  min-height: 30vh;
  padding: ${props => props.theme.spacing.medium};
  background: ${props =>
    props.background &&
    `url(${props.background}-xs.${props.fileExtension ||
      "jpg"}) 0 100% / ${props.backgroundSize ||
      "cover"} no-repeat transparent;`};
  background-position: ${props => props.backgroundSize && "center"};
  display: flex;
  justify-content: ${props =>
    props.direction === "end"
      ? "flex-end"
      : props.direction === "start"
      ? "flex-start"
      : "center"};
  align-items: center;
  img {
    max-width: 100%;
  }
  /* Media queries */
  ${media.large`
    min-height: 45vh;
    background: ${props =>
      props.background &&
      `url(${props.background}-lg.${props.fileExtension ||
        "jpg"}) 0 100% / ${props.backgroundSize ||
        "cover"} no-repeat transparent;`};
    background-position: ${props =>
      props.backgroundSize
        ? "center"
        : props.direction === "end"
        ? "20% 100%"
        : "60% 100%"};
    padding: ${props => props.theme.spacing.xlarge};
  `}
  ${media.xlarge`
    min-height: 50vh;
  `}
`;

export const HeadingTitleStyled = styled(Heading)`
  width: 60%;
  display: block;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding-bottom: ${props => props.theme.spacing.default};
  &::before {
    ${pseudo("absolute", "15%", "0.14em")};
    top: initial;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    background-color: ${props => props.theme.color.secondary};
    border-radius: ${props => props.theme.borderRadius.small}
      ${props => props.theme.borderRadius.small} 0 0;
  }
`;

export const HeadingStyled = styled(Heading)`
  max-width: 12rem;
  text-align: ${props => (props.direction === "end" ? "center" : "left")};
  &&& {
    font-weight: ${props => props.theme.font.weight.light};
    font-size: ${props => !props.size && props.theme.font.size.xlarge};
  }
  /* Media queries */
  ${media.large`
    &&& {
      font-size: ${props => !props.size && props.theme.font.size.largest};
    }
    max-width: 22rem;
  `}
  ${media.xlarge`
    &&& {
      font-size: ${props => !props.size && props.theme.font.size.largest};
    }
    max-width: 20rem;
  `}
`;
