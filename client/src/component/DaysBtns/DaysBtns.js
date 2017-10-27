import React, { Component } from 'react';
import {ButtonGroup} from 'reactstrap';
import styled from 'styled-components';

class DaysBtns extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }



  render() {
    return (
      <div  className="row">
        <div className="col-md-4 col-md-offset-4">
          <ButtonGroup>
            <Button onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}><span> Day 1</span></Button>
            <Button onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}><span> Day 2</span></Button>
            <Button onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}><span> Day 3</span></Button>
            <p> You selected: Day {this.state.rSelected}</p>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

const Button = styled.button`
  margin-right: 5px;
  width:50px;
  background-color:white;
  border-radius:5px;


`


export default DaysBtns;
