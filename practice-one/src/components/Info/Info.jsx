import React from "react";
import "./Info.css";

const Info = ({ avatar, name, job }) => {
  return (
    <div className="info__wrapper">
      <div className="info__avatar">
        <img className="avatar__customer" src={avatar} alt="avatar" />
      </div>
      <p className="info__name">{name}</p>
      <p className="info__job">{job}</p>
    </div>
  );
};

export default Info;
