import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import styled from "styled-components";
import States from "../../data/States";


const Button = styled.button`
background-color: white;
color: blue;
border-radius: 5px;
font-size: 1.5em;
font-family: "Abril Fatface";
margin: 10px;
width: 80px;

&:hover {
   background-color: blue;
   color: white;
 `;

 const Select = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 2px;
  border: 1px solid silver;
 `;


 export default class Location extends React.Component {
     constructor(props){
     super(props);
     this.state = {
       city: "",
       states: ""
       }
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
     }

     onChange (e) {
       this.setState({  [e.target.name]: e.target.value });
     }

     onSubmit(e) {
       e.preventDefault();
       console.log(this.state)
     }

     render() {

       const options= States.map(function (key, val) {
         return <option key = {val} value={val}>{key}</option>
       });
        return (
         <div  className="row">
           <div className="col-md-4 col-md-offset-4">
           <Form onSubmit={this.onSubmit}>
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
               <Button>Sign up</Button>
             </FormGroup>
             </Form>
           </div>
         </div>
      );
     }
    }
