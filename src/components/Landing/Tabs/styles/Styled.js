import styled from "styled-components";
import { Heading } from "../../../Heading";
import { Icon } from "../../../Icon";
import { Text } from "../../../Text";
import { media } from "../../../../styles/media";

export const HeadingStyled = styled(Heading)`
  margin-bottom: ${props => props.theme.spacing.small};
`;

export const TabContentStyled = styled.div`
  width: 80%;
  min-height: 30vh;
  margin: 0 auto;
  /* Media queries */
  ${media.medium`
    width: 50%;
  `} ${media.xlarge`
    width: 30%;
  `};
`;

export const ItemUserStyled = styled.li`
  width: 50%;
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const TextStyled = styled(Text)`
  font-weight: ${props => props.theme.font.weight.light};
`;

export const IconUserStyled = styled(Icon)`
  width: 3em;
  height: 3em;
  display: block;
  margin: 0 auto ${props => props.theme.spacing.small};
  fill: ${props => props.theme.color.secondary};
`;

export const DeviceStyled = styled.li`
  margin-bottom: ${props => props.theme.spacing.large};
  /* Media queries */
  ${media.medium`
    display: flex;
    align-items: center;
  `};
`;

export const DeviceDataStyled = styled.div`
  /* Media queries */
  ${media.medium`
    flex: 1;
    ${props => `text-align: ${props.theme.locale.dir === "rtl" ? "right" : "left"};`}
  `};
`;

export const IconDeviceStyled = styled(Icon)`
  width: 3em;
  height: 3em;
  display: block;
  margin: 0 auto ${props => props.theme.spacing.small};
  fill: ${props => props.theme.color.primary};
  /* Media queries */
  ${media.medium`
    margin: 0 ${props => props.theme.spacing.medium};
  `};
`;

export const HeadingDeviceStyled = styled(Heading)`
  margin-bottom: ${props => props.theme.spacing.xsmall};
`;

export const TextDeviceStyled = styled(Text)`
  margin-bottom: 0;
  font-weight: ${props => props.theme.font.weight.light};
`;

export const ImgDownload = styled.img`
  max-width: 80%;
  margin-top: ${props => props.theme.spacing.medium};
`;
