import React, { Component } from "react";
import {
  TabsContainerStyled,
  TabListStyled,
  TabStyled,
  TabContentContainerStyled,
  IconStyled,
  LabelStyled,
  TabContentLoader
} from "./styles/Styled";

async function calculateTabToShow(tab) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return tab;
}

const Tab = props => {
  const { label, icon, size, className, onClick, isActive } = props;
  return (
    <TabStyled className={className} onClick={onClick} size={size} isActive={isActive}>
      {icon && <IconStyled name={icon} isActive={isActive} />}
      {label && <LabelStyled isActive={isActive} title={label}>{label}</LabelStyled>}
    </TabStyled>
  );
};

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.selectedTab || 0,
      isLoading: false,
      selectedTabMenu: props.selectedTab || 0,
      storedTabs: [props.selectedTab || 0],
    };
  }

  handleClick = async (e, tab, index) => {
    e.stopPropagation();

    if (this.state.isLoading) {
      return false;
    }

    let { storedTabs } = this.state;
    let selectedTab = index;

    this.setState({ isLoading: true, selectedTabMenu: index });

    if (!storedTabs.includes(index)) {
      selectedTab = await calculateTabToShow(index);
      storedTabs.push(index);
      this.setState({ storedTabs });
    }

    this.setState({ selectedTab, isLoading: false });
    this.props.onTabSelected && this.props.onTabSelected(tab);
  };

  render() {
    const { layout, size } = this.props;
    const { isLoading, selectedTab, selectedTabMenu } = this.state;
    const TabContent = () => layout[selectedTab].tabContent;
    return (
      <TabsContainerStyled>
        <TabListStyled size={size}>
          {layout.map((tab, index) => (
            <Tab
              isActive={selectedTabMenu === index}
              key={tab.tabTitle}
              label={tab.tabTitle}
              onClick={e => this.handleClick(e, tab, index)}
              icon={tab.tabIcon}
            />
          ))}
        </TabListStyled>
        <TabContentContainerStyled>
          {isLoading ? <TabContentLoader /> : <TabContent />}
        </TabContentContainerStyled>
      </TabsContainerStyled>
    );
  }
}

export default Tabs;
