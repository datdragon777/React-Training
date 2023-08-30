import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  width,
  height,
  color,
  background,
  fontSize,
  fontWeight,
  icon,
  border,
  align,
}) => {
  const buttonClasses = `btn ${color} ${background} ${border} ${fontSize} ${fontWeight} ${align}`;
  const buttonSizes = {
    "--btn-width": width,
    "--btn-height": height,
  };
  return (
    <button
      type="button"
      className={buttonClasses}
      style={buttonSizes}
    >
      {icon && <img className="btn__icon" src={icon} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.oneOf([
    "btn__text--white",
    "btn__text--blue",
    "btn__text--pink",
  ]),
  background: PropTypes.oneOf([
    "btn__bg--blue",
    "btn__bg--pink",
    "btn__bg--light-blue",
    "btn__bg--light-pink",
  ]),
  border: PropTypes.oneOf(["btn__border--lg", "btn__border--sm"]),
  fontSize: PropTypes.oneOf(["btn__fs--sm", "btn__fs--md", "btn__fs--lg"]),
  fontWeight: PropTypes.oneOf(["btn__fw-sm", "btn__fw-md"]),
  icon: PropTypes.node,
  align: PropTypes.oneOf(["align-default", "align-left"]),
};

Button.defaultProps = {
  children: "Upgrade now",
  width: "8.625rem",
  height: "2.0625rem",
  color: "btn__text--white",
  background: "btn__bg--pink",
  border: "btn__border--lg",
  fontSize: "btn__fs--md",
  fontWeight: "btn__fw--sm",
  align: "align-default",
};

export default Button;
