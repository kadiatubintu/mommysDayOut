import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import styled from "styled-components";

const Div = styled.div`
 width: 100px;
 `;

export default class Checkbox extends React.Component {
  render() {
    return (
      <Div>
        <Form inline   id="form1">
          <FormGroup>
            <Label>
              <Input type="checkbox" /> Single Trip
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
               <Input type="checkbox" /> Round Trip
            </Label>
          </FormGroup>
        </Form>
      </Div>
    );
  }
}
