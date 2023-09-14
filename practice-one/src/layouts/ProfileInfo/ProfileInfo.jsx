import React from "react";
import "./ProfileInfo.css";
import { Info, Contact, Button } from "@components";

const ProfileInfo = ({ selectedCustomer, handleCloseProfileInfo }) => {
  const handleCloseProfile = () => {
    handleCloseProfileInfo();
  };

  return (
    <div className="profile-info">
      <Info
        avatar={selectedCustomer.avatar}
        name={selectedCustomer.name}
        job={selectedCustomer.description}
      />
      <Contact selectedCustomer={selectedCustomer} />

      <div className="profile__close">
        <Button onClick={handleCloseProfile}>Close</Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
