import { memo } from 'react';
import './Toast.css';
import PropTypes from 'prop-types';
import { MESSAGES } from '@constants';
import { toastTheme } from '@themes';

const Toast = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: Object.values(MESSAGES.GET.ERRORS).includes(message)
          ? toastTheme.error
          : toastTheme.success,
      }}
      // ref={toastContainerRef}
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
