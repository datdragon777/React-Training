import React from "react";
import "./Contact.css";
import { ContactDetail } from "@components";
import { email, phone, location } from "@assets/images";

const Contact = () => {
  return (
    <div className="contact">
      <p className="contact__title">Contact Info</p>
      <ContactDetail icon={email} info="kajope5182@ummoh.com" />
      <ContactDetail icon={phone} info="33757005467" />
      <ContactDetail icon={location} info="2239  Hog Camp Road Schaumburg" />
    </div>
  );
};

export default Contact;
