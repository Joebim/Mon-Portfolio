import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./customStyles.css";
import Home from "./pages/home";
import Gallery from "./pages/Gallery";
import Social from "./pages/Social";

function App() {
  return (
    <>
      <div className="zoom">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
