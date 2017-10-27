import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from "styled-components";


const Button = styled.button`
background-color: white;
color: blue;
border-radius: 5px;
font-size:1em;
font-family: "Abril Fatface";
width: 100px;

&:hover {
   background-color: blue;
   color: white;
 }
`;
 export default class CardLists extends React.Component {

   constructor(props){
   super(props);
   this.state = {
     business: [
            {
               name:"API name",
               address:"API ADDRESS",
               phone:"api phone"
            }
          ]
        }
      }

   render() {
     let businesses =  this.state.business.map(val => {
     return (
       <Col sm="4">
         <Card body>
           <CardTitle>{val.name}</CardTitle>
           <CardText>{val.address}</CardText>
           <CardText>{val.phone}</CardText>
           <Button>Choose Me!</Button>
         </Card>
       </Col>
        )
      })

      return (
        <Row>
        {businesses}
        </Row>
      );
    };
  }
