import React from "react";
import "./Account.css"

const Account = ({username, avatar, desc, icon}) => {
  return (
    <div className="account">
      <div className="account__avatar">
        <img className="avatar__img" src={avatar} alt="account-avatar" />
      </div>
      <div className="account__info">
        <p className="info__name">{username}</p>
        <p className="info__desc">{desc}</p>
      </div>
      <div className="account__icon">
        <img className="icon__logout" src={icon} alt="logout" />
      </div>
    </div>
  )
};

export default Account;
