import React from 'react';
import './ConfirmPopup.css';
import { Button } from '@components';
import { BUTTON_VARIANTS } from '@constants';
import PropTypes from 'prop-types';

const ConfirmPopup = ({ questionConfirm, onTogglePopup, onConfirm }) => {
  return (
    <div className='confirm__popup'>
      <div className='confirm__content'>
        <p className='confirm__title'>{questionConfirm}</p>
        <div className='confirm__btn'>
          <Button
            btnName='Cancel'
            variant={BUTTON_VARIANTS.TOGGLE}
            onClick={onTogglePopup}
            icon=''
          />
          <Button
            btnName='Delete'
            variant={BUTTON_VARIANTS.SECONDARY}
            onClick={onConfirm}
            icon=''
          />
        </div>
      </div>
    </div>
  );
};

ConfirmPopup.propTypes = {
  questionConfirm: PropTypes.string.isRequired,
  onTogglePopup: PropTypes.func,
  onConfirm: PropTypes.func,
};

ConfirmPopup.defaultProps = {
  questionConfirm: 'Are you sure to delete customer',
  onTogglePopup: () => {},
  onConfirm: () => {},
};

export default ConfirmPopup;
