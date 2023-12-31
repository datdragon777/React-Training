import PropTypes from "prop-types";
import { options } from "./constants";
import * as React from "react";
import styles from "./Card.module.css";
import classNames from "classnames";
import { getClasses } from "../../../helpers/styles";
import withStyles from "../../../hoc/withStyle";

export const Card = ({
  getStyles,
  children,
  isClickable,
  isDraggable,
}) => {
  return (
    <div
      className={getStyles("card", ["color", "size"], {
        "is-clickable": isClickable,
        "is-draggable": isDraggable,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  getStyles: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

Card.defaultProps = {
  color: "primary",
  size: "sm" 
}

export default withStyles(styles)(Card);
