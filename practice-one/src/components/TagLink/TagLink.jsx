import React from "react";
import { NavLink } from "react-router-dom";
import "./TagLink.css";
import {PropTypes} from "prop-types"
import { dashboard } from "@assets/images";

const TagLink = ({ icon, name, path, isActive, isAnalytics }) => {
  const linkClassName = isActive ? "link__wrapper active" : "link__wrapper";
  const pointerEventsStyle = !isAnalytics ? "none" : "auto";
  return (
    <NavLink
      to={path}
      className={linkClassName}
      style={{ pointerEvents: pointerEventsStyle }}
    >
      <div className="link__icon">
        <img className="icon__item" src={icon} width="24" height="24" alt={`${name}-icon`}/>
      </div>
      <span className="link__name">{name}</span>
    </NavLink>
  );
};

TagLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isAnalytics: PropTypes.bool
}

TagLink.defaultProps = {
  icon: dashboard,
  name: "Default Link",
  path: "/",
  isActive: false,
  isAnalytics: false
}

export default TagLink;
