import styled from "styled-components";
import { Icon } from "../../Icon";
import flavor from "./web";

export const TabsContainerStyled = styled.section`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const TabListStyled = styled.ul`
  font-size: ${props => props.theme.font.size[props.size] || props.theme.components.tabs.tab.font.size};
  border-bottom: ${props => props.theme.components.tabs.tab.border.width} solid ${props => props.theme.components.tabs.tab.border.color.default};
  background-color: ${props => props.theme.components.tabs.backgroundColor};
  text-align: ${props => props.theme.components.tabs.align || "center"};
  ${flavor.tabListStyles}
`;

export const TabStyled = styled.li`
  display: inline-block;
  list-style: none;
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  position: relative;
  cursor: pointer;
  &:before {
    ${props => props.isActive && `
      content: "";
      position: absolute;
      bottom: -${props.theme.components.tabs.tab.border.width};
      left: 0;
      right: 0;
      height: ${props.theme.components.tabs.tab.border.width};
      border-bottom: ${props.theme.components.tabs.tab.border.width} solid ${props.theme.components.tabs.tab.border.color.active};
    `}
  }
  ${flavor.tabStyles}
`;

export const IconStyled = styled(Icon)`
  width: ${props => props.theme.components.tabs.tab.icon.size};
  height: ${props => props.theme.components.tabs.tab.icon.size};
  margin: ${props => props.theme.spacing.default} 0;
  fill: ${props => props.isActive 
    ? props.theme.components.tabs.tab.icon.color.active 
    : props.theme.components.tabs.tab.icon.color.default
  };
  transition: fill ease .1s;
  ${TabStyled}:hover & {
    fill: ${props => props.theme.components.tabs.tab.font.color.active};
  }
`;

export const LabelStyled = styled.span`
  display: block;
  font-weight: ${props => props.isActive ? props.theme.font.weight.bold : props.theme.font.weight.light};
  font-size: ${props => props.theme.components.tabs.tab.font.size};
  color: ${props => props.isActive 
    ? props.theme.components.tabs.tab.font.color.active 
    : props.theme.components.tabs.tab.font.color.default
  };
  text-transform: capitalize;
  transition: all ease .1s;
  ${TabStyled}:hover & {
    color: ${props => props.theme.components.tabs.tab.font.color.active};
  }
`;

export const TabContentContainerStyled = styled.div`
  color:  ${props => props.theme.components.tabs.color};
  text-align: ${props => props.theme.components.tabs.align || "center"};
  padding: ${props => props.theme.components.tabs.padding};
`;
