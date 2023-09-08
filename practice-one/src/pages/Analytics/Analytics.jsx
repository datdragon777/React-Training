import React, { useState, useEffect } from "react";
import "./Analytics.css";
import { Button, Expand, CustomerItem } from "@components";
import { BUTTON_VARIANTS } from "@constants/buttons";
import { plusIcon } from "@assets/images";
import { EXPAND_TITLES } from "@data";

const Analytics = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Sử dụng fetch để fetch dữ liệu từ API
    fetch("https://64e70a09b0fd9648b78f3e0a.mockapi.io/customers")
      .then((response) => response.json())
      .then((data) => {
        // Lưu trữ dữ liệu từ API vào state
        setCustomers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="analytics__header">
        <h1 className="analytics__title">Customer List</h1>
        <Button variant={BUTTON_VARIANTS.SECONDARY} icon={plusIcon} />
      </div>

      <div className="customer__table">
        {/* Start sort title */}
        <div className="customer__sort">
          {EXPAND_TITLES.map((EXPAND_TITLE) => (
            <div className="sort__item" key={EXPAND_TITLE.id}>
              <Expand expandName={EXPAND_TITLE.title} />
            </div>
          ))}
        </div>

        {/* Start customer list */}
        <ul className="customer__list">
          {customers.map((customer) => (
            <li className="customer__item" key={customer.id}>
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
      </div>
    </>
  );
};

export default Analytics;
