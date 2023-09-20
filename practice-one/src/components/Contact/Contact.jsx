import React from "react";
import "./Contact.css";
import { ContactDetail } from "@components";
import PropTypes from "prop-types";
import { email, phone, location } from "@assets/images";

const Contact = ({ selectedCustomer }) => {
  return (
    <div className="contact">
      <p className="contact__title">Contact Info</p>
      <address className="contact__address">
        <ContactDetail
          icon={email}
          info={selectedCustomer.mail}
          type="email"
        />
        <ContactDetail
          icon={phone}
          info={selectedCustomer.phoneNumber}
          type="phone"
        />
        <ContactDetail
          icon={location}
          info={selectedCustomer.address}
          type="address"
        />
      </address>
    </div>
  );
};

Contact.propTypes = {
  selectedCustomer: PropTypes.shape({
    mail: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.string,
  }),
};

Contact.defaultProps = {
  selectedCustomer: {
    mail: "decker_ultra1402@gmail.com",
    phoneNumber: "0785416985",
    address: "03 Ngo Tat To",
  },
};

export default Contact;
