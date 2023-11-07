import React from 'react';
import './ConfirmDeletePopup.css';
import { Button } from '@components';
import { BUTTON_VARIANTS } from '@constants';

const ConfirmDeletePopup = ({
  onToggleDeletePopup,
  onDeleteCustomer,
}) => {
  return (
    <div className='confirm__popup'>
      <div className='confirm__content'>
        <p className='confirm__title'>Do you want to delete this customer?</p>
        <div className='confirm__btn'>
          <Button
            variant={BUTTON_VARIANTS.TOGGLE}
            onClick={onToggleDeletePopup}
          >
            Cancel
          </Button>
          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            onClick={onDeleteCustomer}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletePopup;
