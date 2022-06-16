import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
