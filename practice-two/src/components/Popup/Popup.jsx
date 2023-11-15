import React, { memo } from 'react';
import './Popup.css';
import { Button } from '@components';
import { BUTTON_VARIANTS } from '@constants';
import PropTypes from 'prop-types';

const Popup = ({ popupText, onTogglePopup, onConfirm }) => {
  return (
    <div className='confirm__popup'>
      <div className='confirm__content'>
        <p className='confirm__title'>{popupText}</p>
        <div className='confirm__btn'>
          <Button
            btnName={'Cancel'}
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

Popup.propTypes = {
  popupText: PropTypes.string.isRequired,
  onTogglePopup: PropTypes.func,
  onConfirm: PropTypes.func,
};

Popup.defaultProps = {
  popupText: 'Are you sure to delete customer',
  onTogglePopup: () => {},
  onConfirm: () => {},
};

export default memo(Popup);
