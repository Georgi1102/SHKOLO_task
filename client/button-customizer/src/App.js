import "./App.css";
import Buttons from "./pages/Buttons";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buttons />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
