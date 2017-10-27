import React from 'react';
import styled from 'styled-components';

const P = styled.p`
font-size: 2.5em;
font-family: "Abril Fatface";
`;

export default class Example extends React.Component {
  render() {
    return (
        <div  className="row">
          <div className="col-md-4 col-md-offset-4">
            <P class="h1">Username Enjoy Yourself!!!</P>
          </div>
        </div>
    );
  }
}
