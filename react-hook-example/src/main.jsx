import React from "react";
import ReactDOM from "react-dom/client";
// import UseState from './hooks/useState/UseState'
// import UseEffect from './hooks/useEffect/UseEffect'
// import App from './hooks/useContext/App'
// import SaveReference from './hooks/useRef/SaveReference'
// import QueryToDOMElement from './hooks/useRef/QueryToDOMElement'
// import Lazy from './loading/lazy/Lazy'
// import App from './loading/suspense/App'
// import PassingData from "./PassingData/PassingData";
// import HoverOpacity from "./HOC/HoverOpacity";
// import AwesomeImage from "./HOC/AwesomeImage";
// import withHoverOpacity from "./HOC/withHoverOpacity";
import CustomerHook from "./custom_hook/CustomerHook";

// eslint-disable-next-line react-refresh/only-export-components
// const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage, 0.2);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    {/* <App /> */}
    {/* <SaveReference /> */}
    {/* <QueryToDOMElement /> */}
    {/* <Lazy /> */}
    {/* <App /> */}
    {/* <PassingData /> */}
    {/* <HoverOpacityAwesomeImage src="https://picsum.photos/200/300" /> */}
    <CustomerHook />
  </React.StrictMode>
);
