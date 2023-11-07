import React, { memo } from 'react';
import './CustomerItem.css';
import { PropTypes } from 'prop-types';
import { CustomerInfo, Gender, ContextMenu } from '@components';
import { menuDot, infoAvatar } from '@assets/images';

const CustomerItem = ({
  customer,
  selectedCustomer,
  isShowContextMenu,
  onShowContextMenu,
  onShowProfileInfo,
  onToggleForm,
}) => {
  return (
    <li
      className='customer__item'
      onClick={() => onShowProfileInfo(customer)}
    >
      <CustomerInfo avatar={customer.avatar} name={customer.name} />
      <div className='col-3 col-md-3 customer__align'>
        <p className='customer__text'>{customer.mail}</p>
      </div>
      <div className='col-3 col-md-3 customer__align'>
        <p className='customer__text'>{customer.phoneNumber}</p>
      </div>
      <div className='col-3 col-md-3 customer__last'>
        <Gender gender={customer.gender} />
        <div
          className='customer__option'
          onClick={(e) => onShowContextMenu(e, customer)}
        >
          <img src={menuDot} width='14' height='4' alt='dot icon' />
          <div className='customer__context-menu'>
            {selectedCustomer?.id === customer.id && isShowContextMenu && (
              <ContextMenu onToggleForm={onToggleForm} />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
};

CustomerItem.defaultProps = {
  customer: {
    avatar: infoAvatar,
    name: 'Chrodinger Openheimer',
    mail: 'Nuclear_weapon@destroy.com',
    phoneNumber: '0563489512',
    gender: 'Male',
  },
};

export default memo(CustomerItem);
