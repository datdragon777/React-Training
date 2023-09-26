/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isDay, setIsDay] = useState(true);

  const themeStyle = {
    day: {
      backgroundColor: "rgb(228,228,228)",
      color: "black",
    },
    night: {
      backgroundColor: "black",
      color: "white",
    },
  };

  useEffect(() => {
    const callData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users/1");
        if (!response.ok) {
          throw new Error("Something error!");
        }
        const dataJson = await response.json();
        setUserData(dataJson.data);
      } catch (error) {
        return Error("Error when fetching data");
      }
    };
    callData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        userData,
        isOpen,
        setIsOpen,
        isDay,
        setIsDay,
        themeStyle: themeStyle[isDay ? "day" : "night"],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
