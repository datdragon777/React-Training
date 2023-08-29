import React from "react";
import { NavLink } from "react-router-dom";
import "./TagLink.css";

const TagLink = ({ icon, name, path, isActive }) => {
  const linkClassName = isActive ? 'link__wrapper active' : 'link__wrapper';

  return (
    <NavLink to={path} className={linkClassName}>
      <img className="link__icon" src={icon} alt={name} />
      <span className="link__name">{name}</span>
    </NavLink>
  );
};

export default TagLink;
