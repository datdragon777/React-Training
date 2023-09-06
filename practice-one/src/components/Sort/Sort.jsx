import React from "react";
import "./Sort.css";
import { arrowDown } from "@assets/images";

const Sort = ({ sortName }) => {
  return (
    <div className="sort__item">
      <p className="sort__name">{sortName}</p>
      <img src={arrowDown} className="sort__icon" alt="arrow down" />
    </div>
  );
};

export default Sort;
