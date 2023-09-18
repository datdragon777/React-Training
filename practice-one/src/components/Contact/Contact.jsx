import React from "react";
import "./Contact.css";
import { ContactDetail } from "@components";
import { email, phone, location } from "@assets/images";

const Contact = ({ selectedCustomer }) => {
  return (
    <div className="contact">
      <p className="contact__title">Contact Info</p>
      <address className="contact__address">
        <ContactDetail icon={email} info={selectedCustomer?.mail} type="email" />
        <ContactDetail icon={phone} info={selectedCustomer?.phoneNumber} type="phone" />
        <ContactDetail icon={location} info={selectedCustomer?.address} type="address" />
      </address>
    </div>
  );
};

export default Contact;
