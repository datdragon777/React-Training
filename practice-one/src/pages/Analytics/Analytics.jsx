import React, { useState, useEffect } from "react";
import "./Analytics.css";
import { Button, Expand, ContextMenu, Gender } from "@components";
import { BUTTON_VARIANTS } from "@constants/buttons";
import { plusIcon, loadingData, menuDot } from "@assets/images";
import { EXPAND_TITLES } from "@data";
import { getAllCustomerService } from "../../services/customerService";
import { v4 as uuidv4 } from "uuid";
import { ProfileInfo } from "@layouts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerInfo from "../../components/CustomerInfo/CustomerInfo";

const Analytics = () => {
  // State variables
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
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
        setIsError(null);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
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
        setIsLoading(false);
      }
    };

    getAllCustomers();
  }, []);

  // Render the list of customers
  const renderCustomerList = () => {
    return (
      <ul className="customer__list">
        {customers.map((customer) => (
          <li
            className="customer__item"
            key={uuidv4()}
            onClick={() => handleShowProfileInfo(customer)}
          >
            <CustomerInfo avatar={customer.avatar} name={customer.name} />

            <div className="col-3 col-md-3 customer__align">
              <p className="customer__text">{customer.mail}</p>
            </div>
            <div className="col-3 col-md-3 customer__align">
              <p className="customer__text">{customer.phoneNumber}</p>
            </div>
            <div className="col-3 col-md-3 customer__last">
              <Gender gender={customer.gender} />
              <div
                className="customer__option"
                onClick={(e) => handleShowContextMenu(e, customer)}
              >
                <img src={menuDot} width="14" height="4" alt="dot icon" />
                <div className="customer__context-menu">
                  {selectedCustomer?.id === customer.id &&
                    isShowContextMenu && <ContextMenu />}
                </div>
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
        {isLoading ? (
          // Check loading status
          <div className="customer__loading">
            <img
              src={loadingData}
              className="loading__scene"
              alt="loading-data..."
              width="200px"
              height="200px"
            />
          </div>
        ) : customers.length ? (
          <div className="customer__table">
            {/* Start sort title */}
            <div className="customer__sort">
              {EXPAND_TITLES.map((EXPAND_TITLE) => (
                <div className="sort__item col-3" key={uuidv4()}>
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
        {isError && <ToastContainer limit={1} />}
      </div>
      {selectedCustomer && isShowProfileInfo && (
        <ProfileInfo selectedCustomer={selectedCustomer} />
      )}
    </>
  );
};

export default Analytics;
