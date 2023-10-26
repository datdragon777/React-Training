import React, { memo } from "react";
import "./ProfileInfo.css";
import { Info, Contact } from "@components";

const ProfileInfo = ({ selectedCustomer }) => {
  return (
    <div className="profile-info">
      <Info
        avatar={selectedCustomer.avatar}
        name={selectedCustomer.name}
        job={selectedCustomer.description}
      />
      <Contact selectedCustomer={selectedCustomer} />
    </div>
  );
};

export default memo(ProfileInfo);
