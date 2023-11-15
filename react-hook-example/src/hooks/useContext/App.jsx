import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import "./App.css";
import { AppProvider } from "../Context/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Content />
        <Sidebar />
      </AppProvider>
    </div>
  );
}

export default App;
