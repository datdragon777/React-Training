import "./App.css";
import Content from "./components/Content";
import Nav from "./components/Nav";
// import { SWRConfig } from "swr";
// import Users from "./swr/Users";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  return (
    // <SWRConfig value={{fetcher}}>
    //   <Users />
    // </SWRConfig>
    <div>
      <Nav />
      <Content />
    </div>
  );
}

export default App;
