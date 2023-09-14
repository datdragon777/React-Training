import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Sidebar.css";
import { TagLink, Button, Account } from "@components";
import {
  logoBrand,
  lantern,
  lightLantern,
  logoutIcon,
  accountAvatar,
} from "@assets/images";
import { TAG_LINKS } from "@data";
import { BUTTON_VARIANTS } from "@constants/buttons";

const Sidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="sidebar__brand">
        <a href="/" className="brand__link">
          <div className="brand__logo">
            <img src={logoBrand} alt="Wons" className="brand__img" />
          </div>
          <p className="brand__text">Wons</p>
        </a>
      </div>
      <ul className="sidebar__list">
        {TAG_LINKS.map((tag_link) => {
          const { icon, name, path } = tag_link;
          const isAnalytics = name === "Analytics";
          return (
            <li key={uuidv4()} className={`sidebar__item`}>
              <TagLink
                icon={icon}
                name={name}
                path={path}
                isAnalytics={isAnalytics}
              />
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
        <div className="decoration__wrapper">
          <Button variant={BUTTON_VARIANTS.PRIMARY}>Update now</Button>
        </div>
      </div>

      <Account
        username="Easin Arafat"
        avatar={accountAvatar}
        desc="Free Account"
        icon={logoutIcon}
      />
    </aside>
  );
};

export default Sidebar;
