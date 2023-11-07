import { memo } from 'react';
import './Toast.css';
import PropTypes from 'prop-types';
import { MESSAGES } from '@constants';
import { toastTheme } from '@themes';

const Toast = ({ message }) => {
  const isFailureMessage =
    message === MESSAGES.ADD.FAIL ||
    message === MESSAGES.UPDATE.FAIL ||
    message === MESSAGES.DELETE.FAIL;
  return (
    <div
      style={{
        backgroundColor: isFailureMessage
          ? toastTheme.error
          : toastTheme.success,
      }}
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
  message: MESSAGES.ADD.SUCCESS,
};

export default memo(Toast);
