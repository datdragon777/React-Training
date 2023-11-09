import { memo } from 'react';
import './Toast.css';
import PropTypes from 'prop-types';
import { MESSAGES } from '@constants';
import { toastTheme } from '@themes';
import { TOAST_TYPES } from '@constants';

const Toast = ({ message, type }) => {
  const isFailType = type === TOAST_TYPES.FAIL;

  return (
    <div
      style={{
        backgroundColor: isFailType ? toastTheme.error : toastTheme.success,
      }}
      className={`toast__container`}
    >
      <p className='toast__message'>{message}</p>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Toast.defaultProps = {
  message: MESSAGES.ADD.SUCCESS,
  type: TOAST_TYPES.SUCCESS,
};

export default memo(Toast);
