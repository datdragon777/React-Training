import { useEffect, useRef } from "react";
import "./Toast.css";
import PropTypes from "prop-types";

const Toast = ({ message, backgroundColor }) => {
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
      style={{ backgroundColor: backgroundColor }}
      ref={toastContainerRef}
      className={`toast__container`}
    >
      <p className='toast__message'>{message}</p>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

Toast.defaultProps = {
  message: "Success",
  backgroundColor: "var(--cl-success)",
};

export default Toast;
