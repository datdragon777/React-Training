import React, { useState, useEffect } from "react";
import "./Analytics.css";
import { Button, Expand, CustomerItem } from "@components";
import { BUTTON_VARIANTS } from "@constants/buttons";
import { plusIcon } from "@assets/images";
import { EXPAND_TITLES } from "@data";
import { getAllCustomerService } from "../../services/customerService";
import { v4 as uuidv4 } from "uuid";

const Analytics = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getAllCustomers = async () => {
      // Call getAllCustomerService function to get all data
      const data = await getAllCustomerService();
      setCustomers(data);
    };
    getAllCustomers();
  }, []);

  const renderList = () => {
    return (
      <ul className="customer__list">
        {customers.map((customer) => (
          <li className="customer__item" key={uuidv4()}>
            <CustomerItem
              avatar={customer.avatar}
              name={customer.name}
              email={customer.mail}
              phoneNumber={customer.phoneNumber}
              gender={customer.gender}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="analytics">
      <div className="analytics__header">
        <h1 className="analytics__title">Customer List</h1>
        <Button variant={BUTTON_VARIANTS.SECONDARY} icon={plusIcon} />
      </div>
      {customers.length > 0 ? (
        <div className="customer__table">
          {/* Start sort title */}
          <div className="customer__sort">
            {EXPAND_TITLES.map((EXPAND_TITLE) => (
              <div className="sort__item" key={EXPAND_TITLE.id}>
                <Expand expandName={EXPAND_TITLE.title} />
              </div>
            ))}
          </div>
          {renderList()}
        </div>
      ) : (
        // Show message when list is empty
        <div className="empty__list">
          <p className="empty__message">Customer list is empty!</p>
        </div>
      )}
    </div>
  );
};

export default Analytics;
