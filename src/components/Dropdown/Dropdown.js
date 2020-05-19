import React from "react";
import { Option } from "./Option";
import { DropdownStyled, IconStyled, IconArrowStyled, OptionsStyled } from "./styles/Styled";

const MOUSEDOWN = "mousedown";
const DEFAULT_TEXT = "Select";
const OPTION_KEY = "option_";

function moveToFirst(arr, selectedOption) {
  const arrCopy = [...arr];
  arrCopy.forEach((item, i) => {
    if (item === selectedOption) {
      arrCopy.splice(i, 1);
      arrCopy.unshift(item);
    }
  });
  return arrCopy;
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
    this.onClose = this.onClose.bind(this);

    this.ref = React.createRef();
    this.items = this.props.items;

    this.state = {
      selected: null,
      opened: false
    };
  }

  componentDidMount() {
    document.addEventListener(MOUSEDOWN, this.onClickOutside);
    this.props.showSelectedOnTop && (this.items = moveToFirst(this.props.items, this.state.selected));
    this.updateSelectedItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.updateSelectedItem();
    }
  }

  componentWillUnmount() {
    document.removeEventListener(MOUSEDOWN, this.onClickOutside);
  }

  updateSelectedItem() {
    this.setState({
      selected: this.items[this.props.selectedItem]
    });
  }

  toggle() {
    if (this.state.opened === true) {
      this.onClose();
    } else {
      this.onOpen();
    }
  }

  onOpen() {
    document.addEventListener(MOUSEDOWN, this.onClickOutside);
    this.setState({
      opened: true
    });
    this.props.onDropdownOpened && this.props.onDropdownOpened(this.state.selected);
  }

  onClose() {
    document.removeEventListener(MOUSEDOWN, this.onClickOutside);
    this.setState({
      opened: false
    });
    this.props.onDropdownClosed && this.props.onDropdownClosed(this.state.selected);
  }

  onClickOutside(ev) {
    if (!this.ref.current || this.ref.current.contains(ev.target)) {
      return;
    }
    this.setState({
      opened: false
    });
  }

  onSelect(option) {
    this.setState({
      selected: option
    });
    this.onClose();
    this.props.showSelectedOnTop && (this.items = moveToFirst(this.props.items, option));
    this.props.onItemSelected && this.props.onItemSelected(option);
  }

  getOptions() {
    return this.items.map((item, i) => (
      <Option
        key={`${OPTION_KEY}${i}`}
        option={item}
        onSelect={this.onSelect}
        isSelected={item === this.state.selected}
      />
    ));
  }

  render() {
    const { className, icon, defaultText, width, optionsPosition } = this.props;
    const { opened, selected } = this.state;
    const options = this.getOptions();
    const defaultValue = defaultText || DEFAULT_TEXT;
    const selectedContent = !icon ? defaultValue : "";
    const iconWhenSelected = selected && selected.iconWhenSelected;
    const titleWhenSelected = selected && selected.titleWhenSelected;

    return (
      <DropdownStyled
        className={className}
        ref={this.ref}
        onClick={this.toggle}
        width={width}
        isOpened={this.state.opened}
      >
        {iconWhenSelected && titleWhenSelected ? (
          <>
            {iconWhenSelected} {titleWhenSelected}
          </>
        ) : (
          <>
            <IconStyled name={icon} />
            <span>{selectedContent}</span>
            <IconArrowStyled name={"arrowDown"} isOpened={this.state.opened} />
          </>
        )}
        {opened && <OptionsStyled optionsPosition={optionsPosition}>{options}</OptionsStyled>}
      </DropdownStyled>
    );
  }
}

export default Dropdown;
