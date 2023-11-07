import React, { memo } from 'react';
import './ContextMenu.css';
import { Button } from '@components';
import { BUTTON_VARIANTS } from '@constants/buttons';
import { editIcon, deleteIcon } from '@assets/images';

const ContextMenu = ({ handleToggleForm, handleToggleDeletePopup }) => {
  return (
    <div className='context-menu'>
      <Button
        variant={BUTTON_VARIANTS.EDIT}
        icon={editIcon}
        onClick={handleToggleForm}
      >
        Edit
      </Button>
      <Button
        variant={BUTTON_VARIANTS.DELETE}
        icon={deleteIcon}
        onClick={handleToggleDeletePopup}
      >
        Delete
      </Button>
    </div>
  );
};

export default memo(ContextMenu);
