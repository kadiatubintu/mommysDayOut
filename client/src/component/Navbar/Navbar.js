import React from 'react';
import { Navbar, Container } from 'reactstrap';
import styled from 'styled-components';

const Button = styled.button`
background-color: white;
color: blue;
border-radius: 5px;
font-size: 1.5em;
font-family: "Abril Fatface";
margin: 10px;
width: 120px;

&:hover {
   background-color: blue;
   color: white;
 }
`;

const Nav = styled.nav`
 margin: 0px 200px;
`;

export default class Example extends React.Component {
 constructor(props){
   super(props);
   this.handleHomepage = this.handleHomepage.bind(this);
   this.handleSignUppage = this.handleSignUppage.bind(this);
   this.handleSignInpage = this.handleSignInpage.bind(this);
   this.handleContactUspage = this.handleContactUspage.bind(this);

 }
    handleHomepage(e) {
      e.preventDefault()
      window.location = "./"
      }
    handleSignInpage(e) {
      e.preventDefault()
      window.location = "./SignIn"
      }

    handleSignUppage(e) {
      e.preventDefault()
      window.location = "./SignUp"
      }

    handleContactUspage(e) {
      e.preventDefault()
      window.location = "./ContactUs"
      }




  render() {
    return (
      <div>
        <Nav>
          <Button onClick={(e) =>this.handleHomepage(e)}>Home</Button>
          <Button onClick={(e) =>this.handleSignUppage(e)}>Sign Up</Button>
          <Button onClick={(e) =>this.handleSignInpage(e)}>Sign In</Button>
          <Button onClick={(e) =>this.handleContactUspage(e)}>Contact Us</Button>
        </Nav>
      </div>
        );
    }
  }
