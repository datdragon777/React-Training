import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./LeftSidebar.css";
import { TagLink } from "@components";
import { tag_links } from "../../data/tagLinks";
import LogoBrand from "../../assets/images/wons-logo.svg";
import Lantern from "../../assets/images/lantern.svg";
import LightLantern from "../../assets/images/light-lantern.svg";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar__brand">
        <a href="/" className="brand__link">
          <img src={LogoBrand} alt="Wons" className="brand__img" />
          <p className="brand__text">Wons</p>
        </a>
      </div>
      <ul className="sidebar__list">
        {tag_links.map((tag_link) => {
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
          <img src={Lantern} className="decoration__lantern" alt="lantern" />
          <img
            src={LightLantern}
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
