// Heading styles

import styled from "styled-components";

export const HeadingStyled = styled.h1`
  font-size: ${props => props.theme.font.size[props.size] || props.theme.font.size.large};
  font-weight: ${props => props.theme.font.weight.bold};
  line-height: 1;
  letter-spacing: ${props => (props.theme.locale.dir !== "rtl" ? props.theme.letterSpacing.medium : null)};
  color: ${props => props.theme.color[props.type] || props.theme.color.primary};
`;
