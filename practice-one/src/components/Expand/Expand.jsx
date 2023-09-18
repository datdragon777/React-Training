import React, { useState } from "react";
import "./Expand.css";
import { arrowDown } from "@assets/images";
import PropTypes from "prop-types";

const Expand = ({ expandName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`expand__wrapper ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <p className="expand__name">{expandName}</p>
      <div className={`expand__icon ${isExpanded ? "expanded" : ""}`}>
        <img
          src={arrowDown}
          className={`icon__sort ${isExpanded ? "expanded" : ""}`}
          width="6"
          height="6"
          alt="arrow-down"
        />
      </div>
    </div>
  );
};

Expand.propTypes = {
  expandName: PropTypes.string.isRequired,
};

Expand.defaultProps = {
  expandName: "Name",
};

export default Expand;
