import React from "react";
import "./Button.css";
import PropTypes from "prop-types";
import { getButtonVariant } from "@themes/metrics";
import { BUTTON_VARIANTS } from "@constants/buttons";

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
      {icon && (
        <div className="btn__icon">
          <img
            className="icon__bonus"
            alt={`${children}-icon`}
            width="10"
            height="10"
            src={icon}
          />
        </div>
      )}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)).isRequired,
  icon: PropTypes.string,
};

Button.defaultProps = {
  children: "Update now",
  variant: "primary",
};

export default Button;
