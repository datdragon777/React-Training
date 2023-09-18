import React from "react";
import "./Info.css";
import PropTypes from "prop-types";
import { infoAvatar } from "@assets/images";

const Info = ({ avatar, name, job }) => {
  return (
    <div className="info__wrapper">
      <div className="info__avatar">
        <img
          className="avatar__customer"
          src={avatar}
          width="70"
          height="70"
          alt="avatar-customer"
        />
      </div>
      <p className="info__name">{name}</p>
      <p className="info__job">{job}</p>
    </div>
  );
};

Info.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired
}

Info.defaultProps = {
  avatar: infoAvatar,
  name: "John Deo",
  job: "UI/UX Designer",
}

export default Info;
