import React, { Component } from 'react';
import Badge from "../component/Header/ContactUsBadge";
import ContactForm from "../component/ContactForm";

class ContactUs extends Component {
 render() {
   return (
     <div>
        <Badge />
        <ContactForm />
     </div>
    );
   };
  }

export default ContactUs;
