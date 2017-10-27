import React from 'react';
import styled from "styled-components";

  const Button = styled.button`
  background-color: white;
  color: blue;
  border-radius: 5px;
  font-size: 1.5em;
  font-family: "Abril Fatface";
  margin: 10px;
  width: 150px;

  &:hover {
     background-color: blue;
     color: white;
   }
  `;

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button><span>Save</span></Button>{' '}
      </div>
     );
   }
 }
