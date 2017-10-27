import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';

const Form = styled.form`
width: 300px;
`;

const Button = styled.button`
background-color: blue;
color: white;
border-radius: 5px;
font-size: 15px;
margin-left: 50px;
margin: 10px 300px;
width: 150px;

&:hover {
   background-color: white;
   color: blue;
 }
`;

export default class Example extends React.Component {
  render() {
    return (
      <Form>
      <FormGroup>
        <Label for="exampleText"><p>Username</p></Label>
          <Input type="name" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button>Post</Button>
        </Form>
      );
    }
  }
