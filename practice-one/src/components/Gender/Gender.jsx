import React from "react";
import "./Gender.css";

const Gender = ({ gender }) => {
  const genderStyle = `gender__wrapper gender__wrapper--${gender.toLowerCase()}`;

  return <p className={genderStyle}>{gender}</p>;
};

export default Gender;
