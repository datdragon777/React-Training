import React, { useState, useEffect } from "react";
import "./Analytics.css";
import { Button, Expand, CustomerItem, ContextMenu } from "@components";
import { BUTTON_VARIANTS } from "@constants/buttons";
import { plusIcon, loadingData, menuDot } from "@assets/images";
import { EXPAND_TITLES } from "@data";
import { getAllCustomerService } from "../../services/customerService";
import { v4 as uuidv4 } from "uuid";
import { ProfileInfo } from "@layouts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Analytics = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isShowProfileInfo, setIsShowProfileInfo] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
    setIsShowProfileInfo(true);
  };

  const handleCloseProfileInfo = () => {
    setIsShowProfileInfo(false);
  };

  const handleShowContextMenu = (e, customerId) => {
    e.stopPropagation()
    if (selectedCustomerId === customerId) {
      // If the clicked item is the same as the currently selected item, close the ContextMenu
      setSelectedCustomerId(null);
    } else {
      setSelectedCustomerId(customerId); // Set the selected item
    }
  }

  useEffect(() => {
    const getAllCustomers = async () => {
      try {
        // Call getAllCustomerService function to get all data
        const response = await getAllCustomerService();
        if (!response.ok) {
          throw new Error("Sorry! Having some error, please try again");
        }

        const data = await response.json();
        setCustomers(data);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        toast.error("Having some error. Please try again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false);
      }
    };

    getAllCustomers();
  }, []);

  const renderCustomerList = () => {
    return (
      <ul className="customer__list">
        {customers.map((customer) => (
          <li
            className="customer__item"
            key={uuidv4()}
            onClick={() => handleCustomerClick(customer)}
          >
            <CustomerItem
              avatar={customer.avatar}
              name={customer.name}
              email={customer.mail}
              phoneNumber={customer.phoneNumber}
              gender={customer.gender}
            />
            <div className="customer__option" onClick={(e) => handleShowContextMenu(e, customer.id)}>
              <img src={menuDot} width="14" height="4" alt="dot icon" />
              <div className="customer__context-menu">
                {selectedCustomerId === customer.id && <ContextMenu />}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div
        className={`analytics ${isShowProfileInfo ? "analytics--profile" : ""}`}
      >
        <div className="analytics__header">
          <h2 className="title__page">Customer List</h2>
          <Button variant={BUTTON_VARIANTS.SECONDARY} icon={plusIcon}>
            Add Customer
          </Button>
        </div>
        {loading ? (
          // Check loading status
          <div className="customer__loading">
            <img
              src={loadingData}
              className="loading__scene"
              alt="loading data..."
            />
          </div>
        ) : customers.length ? (
          <div className="customer__table">
            {/* Start sort title */}
            <div className="customer__sort">
              {EXPAND_TITLES.map((EXPAND_TITLE) => (
                <div className="sort__item" key={uuidv4()}>
                  <Expand expandName={EXPAND_TITLE.title} />
                </div>
              ))}
            </div>
            {renderCustomerList()}
          </div>
        ) : (
          // Show message when list is empty
          <p className="empty__message">Customer list is empty!</p>
        )}
        {error && <ToastContainer limit={1} />}
      </div>
      {isShowProfileInfo && (
        <ProfileInfo
          selectedCustomer={selectedCustomer}
          handleCloseProfileInfo={handleCloseProfileInfo}
        />
      )}
    </>
  );
};

export default Analytics;
