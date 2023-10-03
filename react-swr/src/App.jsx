import "./App.css";
// import Content from "./components/Content";
// import Nav from "./components/Nav";
import { SWRConfig } from "swr";
import HandleError from "./swr/HandleError";
// import Users from "./swr/Users";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  return (
    // <SWRConfig value={{fetcher}}>
    //   <Users />
    // </SWRConfig>
    // <div>
    //   <Nav />
    //   <Content />
    // </div>
    <SWRConfig value={{ refreshInterval: 1000 }}>
      <HandleError />
    </SWRConfig>
  );
}

export default App;
