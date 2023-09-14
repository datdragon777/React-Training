import React from "react";
import "./Expand.css";
import { arrowDown } from "@assets/images";

const Expand = ({ expandName }) => {
  return (
    <div className="expand__wrapper">
      <p className="expand__name">{expandName}</p>
      <div className="expand__icon">
        <img
          src={arrowDown}
          className="icon__sort"
          width="6"
          height="6"
          alt="arrow-down"
        />
      </div>
    </div>
  );
};

export default Expand;
