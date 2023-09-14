import React, { useState } from "react";
import "./CustomerItem.css";
import { menuDot } from "@assets/images";
import { CustomerInfo, Gender, ContextMenu } from "@components";

const CustomerItem = ({ avatar, name, email, phoneNumber, gender }) => {
  const [isShowContextMenu, setIsShowContextMenu] = useState(false);

  const handleContextMenuClick = (e) => {
    e.stopPropagation();
    setIsShowContextMenu(!isShowContextMenu);
  };

  return (
    <>
      <div className="customer__info">
        <CustomerInfo avatar={avatar} name={name} />
        <p className="customer__text">{email}</p>
        <p className="customer__text">{phoneNumber}</p>
        <Gender gender={gender} />
        <div className="customer__option" onClick={handleContextMenuClick}>
          <img src={menuDot} width="14" height="4" alt="dot icon" />
          <div className="customer__context-menu">
            {isShowContextMenu && <ContextMenu />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerItem;
