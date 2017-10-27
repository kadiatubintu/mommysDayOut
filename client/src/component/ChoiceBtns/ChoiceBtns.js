import React from 'react';
import styled from "styled-components";

  const Div = styled.div`
  height: 80px;
  padding: 30px;
  background-color: white;
  border-radius:5px;
  margin: 50px;
  &:hover {
     background-color: blue;
   }
  `;

  const Button = styled.button`
  background-color: white;
  color: blue;
  border-radius: 5px;
  font-size: 2em;
  font-family: "Abril Fatface";
  margin-left: 50px;
  width: 150px;

  &:hover {
     background-color: blue;
     color: white;
   }
  `;


export default class Example extends React.Component {
  constructor(props){
    super(props);
    this.handleNightlifepage = this.handleNightlifepage.bind(this);
    this.handleSpadaypage = this.handleSpadaypage.bind(this);
    this.handleSightseeingpage = this.handleSightseeingpage.bind(this);

  }
  handleNightlifepage(e) {
    e.preventDefault()
    window.location = "./Nightlife"
    }

    handleSpadaypage(e) {
      e.preventDefault()
      window.location = "./Spaday"
      }

      handleSightseeingpage(e) {
        e.preventDefault()
        window.location = "./Sightseeing"
        }


  render() {
    return (
      <Div>
      <Button onClick={(e) =>this.handleNightlifepage(e)}>Night Life</Button>
      <Button onClick={(e) =>this.handleSpadaypage(e)}>Spa Day</Button>
      <Button onClick={(e) =>this.handleSightseeingpage(e)}>Sight Seeing</Button>
      </Div>
     );
   }
 }
