import { memo, useEffect, useRef } from "react";
import "./Toast.css";
import PropTypes from "prop-types";
import { MESSAGES } from "@constants";
import { toastTheme } from "@themes";

const Toast = ({ message }) => {
  const toastContainerRef = useRef(null);

  useEffect(() => {
    if (toastContainerRef.current) {
      const container = toastContainerRef.current;
      const timeoutId = setTimeout(() => {
        container.classList.add("toast__close");
      }, 4000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: Object.values(MESSAGES.GET.ERRORS).includes(message)
          ? toastTheme.error
          : toastTheme.success,
      }}
      ref={toastContainerRef}
      className={`toast__container`}
    >
      <p className='toast__message'>{message}</p>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
};

Toast.defaultProps = {
  message: MESSAGES.GET.SUCCESSES.ADD_SUCCESSED,
};

export default memo(Toast);
