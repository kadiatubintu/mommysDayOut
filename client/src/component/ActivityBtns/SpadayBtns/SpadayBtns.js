import React from 'react';
import styled from "styled-components";
import {onSelect, props} from "react";
const PropTypes = require("prop-types");
const Activities = ["All" , "Massage"]

export default class Example extends React.Component {
  constructor(props){
    super(props);

    this.SelectSpadayActivity = this.SelectSpadayActivity.bind(this);
  }

  SelectSpadayActivity(e){
    e.preventDefault()
    onSelect()
  }
 handleClick(e){
   e.preventDefault()
   console.log("hi")
 }
  render(){
    const displayActs = this.props.activities.map(function(key, val){
      return <displayAct key ={val} value={val}>{key}</displayAct>

    });

    return(
      <ul className="Activities">
          <li
            onClick = {this.handleClick}
            >
          </li>
        </ul>
      )
    }
  }
