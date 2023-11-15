import React, { memo } from "react";
import "./Gender.css";
import PropTypes from "prop-types";

const Gender = ({ gender }) => {
  const genderStyle = `gender__wrapper gender__wrapper--${gender.toLowerCase()}`;

  return <p className={genderStyle}>{gender}</p>;
};

Gender.propTypes = {
  gender: PropTypes.oneOf(["Male", "Female"]),
};

Gender.defaultProps = {
  gender: "Male",
};

export default memo(Gender);
