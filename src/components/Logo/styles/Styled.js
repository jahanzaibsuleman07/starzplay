// Logo Styles

import styled from "styled-components";

export const LogoStyled = styled.svg.attrs(props => ({
  viewBox: props.theme.components.logo.viewBox
}))`
  fill: ${props => props.fill || props.theme.components.logo.color || props.theme.color.primary};
  width: ${props => props.width || props.theme.components.logo.width};
  height: ${props => props.height || props.theme.components.logo.height};
`;

export const PathStyled = styled.path.attrs(props => ({
  d: props.theme.components.logo.path
  // Template function needed empty to avoid render error
}))``;
