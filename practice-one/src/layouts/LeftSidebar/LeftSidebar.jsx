import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./LeftSidebar.css";
import { TagLink } from "@components";
import logoBrand from "../../assets/images/wons-logo.svg";
import lantern from "../../assets/images/lantern.svg";
import lightLantern from "../../assets/images/light-lantern.svg";
import { TAG_LINKS } from "../../data/tagLinks";


const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar__brand">
        <a href="/" className="brand__link">
          <img src={logoBrand} alt="Wons" className="brand__img" />
          <p className="brand__text">Wons</p>
        </a>
      </div>
      <ul className="sidebar__list">
        {TAG_LINKS.map((tag_link) => {
          const { icon, name, path } = tag_link;
          return (
            <li key={uuidv4()} className="sidebar__item">
              <TagLink icon={icon} name={name} path={path} />
            </li>
          );
        })}
      </ul>

      <div className="sidebar__decoration">
        <div className="decoration__img">
          <img src={lantern} className="decoration__lantern" alt="lantern" />
          <img
            src={lightLantern}
            className="decoration__light-lantern"
            alt="lignt lantern"
          />
        </div>
        <div className="decoration__wrapper"></div>
      </div>
    </div>
  );
};

export default LeftSidebar;
