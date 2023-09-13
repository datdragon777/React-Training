import React from "react";
import "./ProfileInfo.css";
import { Info, Contact } from "@components";

const ProfileInfo = ({ selectedCustomer }) => {

  return (
    <div className="profile-info">
      {selectedCustomer ? (
        <>
          <Info
            avatar={selectedCustomer.avatar}
            name={selectedCustomer.name}
            job={selectedCustomer.description}
          />
          <Contact selectedCustomer={selectedCustomer} />
        </>
      ) : (
        <p>No customer selected.</p>
      )}
    </div>
  );
};

export default ProfileInfo;
