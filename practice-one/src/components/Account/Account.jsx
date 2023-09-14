import React from "react";
import "./Account.css"

const Account = ({username, avatar, desc, icon}) => {
  return (
    <div className="account">
      <div className="account__avatar">
        <img className="avatar__img" src={avatar} width="45" height="45" alt="account-avatar" />
      </div>
      <div className="account__info">
        <p className="account__name">{username}</p>
        <p className="account__desc">{desc}</p>
      </div>
      <div className="account__icon">
        <img className="icon__logout" src={icon} width="18" height="18"  alt="logout-icon" />
      </div>
    </div>
  )
};

export default Account;
