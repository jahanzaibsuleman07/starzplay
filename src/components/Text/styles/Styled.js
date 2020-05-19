// Text styles

import styled from "styled-components";

export const TextStyled = styled.p`
  color: ${props => props.theme.components.text.color[props.type] || props.theme.color.primary};
  font-size: ${props => props.theme.font.size[props.size] || props.theme.font.size.default};
  margin-bottom: ${props => props.theme.spacing.xsmall};
  letter-spacing: ${props => props.theme.locale.dir !== "rtl" && props.theme.letterSpacing.small};
  line-height: ${props => props.theme.font.lineHeight.medium};
`;
