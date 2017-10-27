import React from 'react';
import styled from 'styled-components';

const P = styled.p`
width: 200px;
font-size: 3em;
font-family: "Abril Fatface";
`;

export default class Example extends React.Component {
  render() {
    return (
        <div  className="row">
          <div className="col-md-5 col-md-offset-5">
            <P class="h1">Contact Us</P>
          </div>
        </div>
    );
  }
}
