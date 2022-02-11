import "./global.scss";
import Navbar from "./components/Navbar/Navbar";
import LaundromatsBottomSection from "./components/LaundromatsBottomSection/LaundromatsBottomSection";
import Admin from "./components/Admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Admin/Account/Details/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <LaundromatsBottomSection /> */}
        <Routes>
          <Route path="/" element={<LaundromatsBottomSection />} />
          <Route path="/admin/account" element={<Admin />} />
          <Route path="/admin/account/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
