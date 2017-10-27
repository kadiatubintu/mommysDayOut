import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
height: 40px;
padding: 10px;
background-color: lightgray;
border-radius: 2px;
border-top: 3px solid blue;
margin-bottom: 10px;
`;

const P = styled.p`
text-align: center;
`;

const Example = (props) => {
  return (
    <Div>
      <P>Created by Kadiatu Bintu Kamara &#169; 2017.</P>
    </Div>
  );
}

  export default Example;
