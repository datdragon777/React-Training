import React from "react";
import "./CustomerItem.css";
import { CustomerInfo, Gender } from "@components";

const CustomerItem = ({ avatar, name, email, phoneNumber, gender }) => {
  

  return (
    <>
      <div className="customer__info">
        <CustomerInfo avatar={avatar} name={name} />
        <p className="customer__text">{email}</p>
        <p className="customer__text">{phoneNumber}</p>
        <Gender gender={gender} />
      </div>
    </>
  );
};

export default CustomerItem;
