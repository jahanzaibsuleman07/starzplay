// Menu.styled.js
import styled, { css, keyframes } from "styled-components";
import StickyBanner from "../../StickyBanner";

const TIME_SHOWHIDE_MENU = 0.4;

const keyframesHideMenu = keyframes`
  0% {
    opacity: 1;
    display: block;
  }
  
  100% {
    opacity: 0;
    display: none;
  }
`;

const hideMenu = css`
  animation: ${keyframesHideMenu} 0.1s linear ${TIME_SHOWHIDE_MENU}s 1;
  animation-fill-mode: forwards;
`;

export const MenuStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.color.black};
  padding: ${props => props.theme.spacing.large};
  position: fixed;
  top: 0;
  ${props => (props.theme.locale.dir === "rtl" ? "right" : "left")}: 0;
  transition: transform ${TIME_SHOWHIDE_MENU}s ease-in-out;
  transform: ${props =>
    props.isOpened
      ? "initial"
      : `translateX(${props.theme.locale.dir === "rtl" ? "" : "-"}100%);`};
  text-align: center;
  ${props => !props.isOpened && hideMenu};
  z-index: ${props => props.theme.zIndex.high};
`;

export const NavStyled = styled.ul`
  margin-top: ${props => props.theme.spacing.large};
`;

export const NavItemStyled = styled.li`
  color: ${props => props.theme.color.primary};
  cursor: pointer;
  background-color: transparent;
  transition: background-color ease 0.2s;
  padding: ${props => props.theme.spacing.large};
  & + & {
    border-top: 1px solid ${props => props.theme.color.greyDarkest};
  }
`;

export const LinkStyled = styled.a`
  color: currentColor;
  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.default};
  font-weight: ${props => props.theme.font.weight.light};
  font-size: ${props => props.theme.font.size.medium};
  &:hover {
    font-weight: ${props => props.theme.font.weight.bold};
  }
`;

export const StickyBannerStyled = styled(StickyBanner)`
  border-top: 0;
  > div {
    flex-direction: column;
  }
`;
