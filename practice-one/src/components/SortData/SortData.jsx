import React, { useState } from "react";
import "./SortData.css";
import { arrowDown } from "@assets/images";
import PropTypes from "prop-types";

const SortData = ({ name }) => {
  const [isSorted, setIsSorted] = useState(false);

  const handleToggleSort = () => {
    setIsSorted(!isSorted);
  };

  return (
    <div
      className={`sort__wrapper ${isSorted ? "sorted" : ""}`}
      onClick={handleToggleSort}
    >
      <p className="sort__name">{name}</p>
      <div className={`sort__icon ${isSorted ? "sorted" : ""}`}>
        <img
          src={arrowDown}
          className={`icon__sort ${isSorted ? "sorted" : ""}`}
          width="6"
          height="6"
          alt="arrow-down"
        />
      </div>
    </div>
  );
};

SortData.propTypes = {
  expandName: PropTypes.string.isRequired,
};

SortData.defaultProps = {
  expandName: "Name",
};

export default SortData;
