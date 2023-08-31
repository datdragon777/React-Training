import React from "react";
import "./Account.css"
import accountAvatar from "../../assets/images/account-avatar.png"
import logoutIcon from "../../assets/images/logout.svg"

const Account = () => {
  return (
    <div className="account">
      <div className="account__avatar">
        <img src={accountAvatar} alt="account-avatar" />
      </div>
      <div className="account__info">
        <div className="info__name">Easin Arafat</div>
        <div className="info__desc">Free Account</div>
      </div>
      <div className="account__icon">
        <img className="icon__logout" src={logoutIcon} alt="logout" />
      </div>
    </div>
  )
};

export default Account;
