import React from "react";
import "./CustomerAvatar.css";

const CustomerAvatar = ({ customerAvatar, customerName }) => {
  return (
    <div className="customer__wrapper">
      <div className="customer__avatar">
        <img
          className="customer__img"
          src={customerAvatar}
          alt={customerName}
        />
      </div>
      <p className="customer__name">{customerName}</p>
    </div>
  );
};

export default CustomerAvatar;
