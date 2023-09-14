import React from "react";
import "./Info.css";

const Info = ({ avatar, name, job }) => {
  return (
    <div className="info__wrapper">
      <div className="info__avatar">
        <img className="avatar__customer" src={avatar} width="70" height="70" alt="avatar-customer" />
      </div>
      <p className="info__name">{name}</p>
      <p className="info__job">{job}</p>
    </div>
  );
};

export default Info;
