import Routers from "./router/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "@layouts";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="contents">
        <Sidebar />
        <main className="main-content">
          <Routers />
        </main>
      </div>
    </Router>
  );
}

export default App;
