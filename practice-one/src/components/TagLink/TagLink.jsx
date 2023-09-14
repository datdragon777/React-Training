import React from "react";
import { NavLink } from "react-router-dom";
import "./TagLink.css";

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
        <img className="icon__item" src={icon} alt={name} />
      </div>
      <span className="link__name">{name}</span>
    </NavLink>
  );
};

export default TagLink;
