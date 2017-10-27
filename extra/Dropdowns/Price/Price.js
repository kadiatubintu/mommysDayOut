import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Price Range
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Cheap</DropdownItem>
          <DropdownItem>Moderate</DropdownItem>
          <DropdownItem>Expensive</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
