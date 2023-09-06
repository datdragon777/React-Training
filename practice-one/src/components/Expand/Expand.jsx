import React from "react";
import "./Expand.css";
import { arrowDown } from "@assets/images";

const Expand = ({ expandName }) => {
  return (
    <div className="expand__wrapper">
      <p className="expand__name">{expandName}</p>
      <img src={arrowDown} className="expand__icon" alt="arrow down" />
    </div>
  );
};

export default Expand;
