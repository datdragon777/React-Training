import React from "react";
import "./Button.css";
import PropTypes from "prop-types";
import { getButtonVariant } from "../../helpers/metrics";
import { BUTTON_VARIANTS } from "../../constants/buttons";

const Button = ({
  children,
  variant = BUTTON_VARIANTS.PRIMARY,
  icon,
  onClick,
}) => {
  const buttonVariant = getButtonVariant(variant);
  const buttonStyle = {
    backgroundColor: buttonVariant.bgColor,
    color: buttonVariant.color,
    fontSize: buttonVariant.fontSize,
    fontWeight: buttonVariant.fontWeight,
    width: buttonVariant.width,
    height: buttonVariant.height,
    borderRadius: buttonVariant.borderRadius,
    justifyContent: buttonVariant.justifyContent,
  };

  return (
    <button type="button" className="btn" style={buttonStyle} onClick={onClick}>
      {icon && <img className="btn__icon" src={icon} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  icon: PropTypes.node,
};

Button.defaultProps = {
  children: "Update now",
  variant: "primary",
};

export default Button;
