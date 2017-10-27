import React from 'react';
import {FormGroup, Label, Input, select, Col, Row } from 'reactstrap';
import styled from 'styled-components';
import States from '../../../data/States';

const Form = styled.form`
margin-top: 20px;
`;

const Button = styled.button`
background-color: white;
color: blue;
border-radius: 5px;
font-size: 15px;
margin-left: 50px;
width: 150px;

&:hover {
   background-color: blue;
   color: white;
 }
`;

const Select = styled.select`
 width: 200px;
 height: 30px;
 border-radius: 2px;
 border: 1px solid silver;
`;

export default class NewUser extends React.Component {

  constructor(props){
  super(props);
  this.state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    city: "",
    states: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSignInpage = this.handleSignInpage.bind(this);

  }

  onChange (e) {
    this.setState({  [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  handleSignInpage(e) {
    e.preventDefault()
    window.location = "./Users"
    }


  render() {
  const options= States.map(function (key, val) {
      return <option key = {val} value={val}>{key}</option>
    });
     return (
      <div  className="row">
        <div className="col-md-4 col-md-offset-4">
        <Form onSubmit={this.onSubmit}>
          <h2>New User Login</h2>
            <FormGroup>
              <Label for="exampleUsername">Username</Label>{' '}
              <Input type="text" name="username" id="exampleUsernameil" placeholder="your name"
                 value={this.state.username}
                 onChange={this.onChange}
              />
            </FormGroup>
            {' '}
              <FormGroup>
                <Label for="exampleEmail">Email</Label>{' '}
                <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool"
                value={this.state.email}
                onChange={this.onChange}
                 />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="examplePassword">Password</Label>{' '}
                <Input type="password" name="password" id="examplePassword" placeholder="don't tell!"
                value={this.state.password}
                onChange={this.onChange}
                />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="examplePassword">Password Confirmation</Label>{' '}
                <Input type="password" name="passwordConfirmation" id="examplePassword" placeholder="don't tell!"
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                />
              </FormGroup>
              {' '}

              <FormGroup>
                <Label for="inputCity" className="col-form-label">City</Label>
                <Input type="text" name="city" className="form-control" id="inputCity"
                  value={this.state.city}
                  onChange={this.onChange}

                />
              </FormGroup>
              <FormGroup>
                <Label for="inputState" className="col-form-label">State: </Label>
                <Select id="inputState" name="states" className="form-control"
                  value={this.state.states}
                  onChange={this.onChange}
                  >
              {options}
                </Select>
              </FormGroup>
              <FormGroup>
              <Button onClick={(e) =>this.handleSignInpage(e)}>Sign In</Button>
              </FormGroup>
          </Form>
        </div>
      </div>
   );
  }
 }
