import React from "react";
import "./ContactDetail.css";

const ContactDetail = ({ icon, info }) => {
  return (
    <div className="contact-detail">
      <div className="contact-detail__icon">
        <img className="icon__info" src={icon} alt="icon info" />
      </div>
      <p className="contact-detail__info">{info}</p>
    </div>
  );
};

export default ContactDetail;
