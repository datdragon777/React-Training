import React from "react";
import "./CustomerInfo.css";

const CustomerInfo = ({ avatar, name }) => {
  return (
    <div className="customer__wrapper">
      <div className="customer__avatar">
        <img className="customer__img" src={avatar} width="30" height="30" alt={`${name}-avatar`} />
      </div>
      <p className="customer__name">{name}</p>
    </div>
  );
};

export default CustomerInfo;
