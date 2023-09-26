import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

/* eslint-disable react/prop-types */
export default function Header() {
  const {userData, isOpen, setIsOpen, themeStyle, setIsDay, isDay} = useContext(AppContext)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDay(!isDay)
  }

  return (
    <div
      className="header"
      style={{
        ...themeStyle,
        display: "flex",
        justifyContent: "right",
        padding: "10px",
        gridColumn: isOpen ? "2 / 4" : "1 / 4",
        gridRow: "1 / 2",
        alignItems: "center"
      }}
    >
      <div>Hello!</div>
      <p style={{ cursor: "pointer", marginRight: 5 }} onClick={toggleSidebar}>
        {userData.first_name} {userData.last_name}
      </p>
      <label className="switch">
        <input type="checkbox" checked={isDay} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
