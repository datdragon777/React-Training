// Library
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useSWR from 'swr';

// Import style for Analytics component
import './Analytics.css';

// Import service to call API
import { getAllCustomerService } from '@services';

// Import images or icons
import { plusIcon, loadingData } from '@assets/images';

// Import components
import { Button, SortData, CustomerItem, Toast } from '@components';

// Import constant
import { BUTTON_VARIANTS, BASE_URL, PATH, MESSAGES } from '@constants';

// Import list data for Expand component
import { SORT_TITLES } from '@data';

// Import layout
import { ProfileInfo } from '@layouts';

const Analytics = () => {
  // State variables
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isShowProfileInfo, setIsShowProfileInfo] = useState(false);
  const [isShowContextMenu, setIsShowContextMenu] = useState(false);

  // Event handler for clicking a customer
  const handleShowProfileInfo = (customer) => {
    // If clicked on the same customer that is already selected, toggle the profile show
    if (selectedCustomer && selectedCustomer.id === customer.id) {
      setIsShowProfileInfo(!isShowProfileInfo);
    } else {
      // If clicked on a different customer, select the new customer and show the new profile
      setSelectedCustomer(customer);
      setIsShowProfileInfo(true);
    }
  };

  // Event handler for showing context menu
  const handleShowContextMenu = (e, customer) => {
    e.stopPropagation();
    // If clicked on the same customer that is already selected, toggle the context menu show
    if (selectedCustomer && selectedCustomer.id === customer.id) {
      setIsShowContextMenu(!isShowContextMenu);
    } else {
      // If clicked on a different customer, select the new customer and show the new context menu
      setSelectedCustomer(customer);
      setIsShowContextMenu(true);
    }
  };

  // Fetch data from the server when the component mounts
  const {
    data: customers,
    error: isError,
    isLoading,
  } = useSWR(`${BASE_URL}/${PATH}`, getAllCustomerService, {
    refreshInterval: 1800000, // refresh component after 30 minutes
    shouldRetryOnError: false, // avoiding call API continuously when occur error
  });

  // Render the list of customers
  const renderCustomerList = () => {
    return (
      <ul className='customer__list'>
        {customers.map((customer) => (
          <CustomerItem
            key={uuidv4()}
            customer={customer}
            selectedCustomer={selectedCustomer}
            isShowContextMenu={isShowContextMenu}
            handleShowContextMenu={handleShowContextMenu}
            handleShowProfileInfo={handleShowProfileInfo}
          />
        ))}
      </ul>
    );
  };

  return (
    <>
      <div
        className={`analytics ${isShowProfileInfo ? 'analytics--profile' : ''}`}
      >
        <div className='analytics__header'>
          <h2 className='title__page'>Customer List</h2>
          <Button variant={BUTTON_VARIANTS.SECONDARY} icon={plusIcon}>
            Add Customer
          </Button>
        </div>
        {isLoading ? (
          // Check loading status
          <div className='customer__loading'>
            <img
              src={loadingData}
              className='loading__scene'
              alt='loading-data...'
              width='200px'
              height='200px'
            />
          </div>
        ) : customers ? (
          <div className='customer__table'>
            {/* Start sort title */}
            <div className='customer__sort'>
              {SORT_TITLES.map((SORT_TITLE) => (
                <div className='sort__item col-3' key={uuidv4()}>
                  <SortData name={SORT_TITLE.title} />
                </div>
              ))}
            </div>
            {renderCustomerList()}
          </div>
        ) : (
          // Show message when list is empty
          <p className='empty__message'>{MESSAGES.EMPTY_LIST}</p>
        )}
        {isError && <Toast message={MESSAGES.GET.API_FAILED} />}
      </div>
      {selectedCustomer && isShowProfileInfo && (
        <ProfileInfo selectedCustomer={selectedCustomer} />
      )}
    </>
  );
};

export default Analytics;
