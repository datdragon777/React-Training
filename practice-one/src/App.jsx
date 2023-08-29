import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Analytics from "./pages/Analytics/Analytics";
import LeftSidebar from "./layouts/LeftSidebar/LeftSidebar";

function App() {
  return (
    <Router>
      <aside>
        <LeftSidebar />
      </aside>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
