import React, { Component } from "react";
import {
  TabsContainerStyled,
  TabListStyled,
  TabStyled,
  TabContentContainerStyled,
  IconStyled,
  LabelStyled
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
      selectedTab: props.selectedTab || 0
    };
  }

  handleClick = async (tab, index) => {
    this.setState({ selectedTab: await calculateTabToShow(index) });
    this.props.onTabSelected && this.props.onTabSelected(tab);
  };

  render() {
    const { layout, size } = this.props;
    const TabContent = () => layout[this.state.selectedTab].tabContent;
    return (
      <TabsContainerStyled>
        <TabListStyled size={size}>
          {layout.map((tab, index) => (
            <Tab
              isActive={this.state.selectedTab === index}
              key={tab.tabTitle}
              label={tab.tabTitle}
              onClick={() => this.handleClick(tab, index)}
              icon={tab.tabIcon}
            />
          ))}
        </TabListStyled>
        <TabContentContainerStyled>
          <TabContent />
        </TabContentContainerStyled>
      </TabsContainerStyled>
    );
  }
}

export default Tabs;
