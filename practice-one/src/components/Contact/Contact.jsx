import React from "react";
import "./Contact.css";
import { ContactDetail } from "@components";
import { email, phone, location } from "@assets/images";

const Contact = ({ selectedCustomer }) => {
  return (
    <div className="contact">
      <p className="contact__title">Contact Info</p>
      <ContactDetail icon={email} info={selectedCustomer.mail} />
      <ContactDetail icon={phone} info={selectedCustomer.phoneNumber} />
      <ContactDetail icon={location} info={selectedCustomer.address} />
    </div>
  );
};

export default Contact;
