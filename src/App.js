import "./global.scss";
import Navbar from "./components/Navbar/Navbar";
import LaundromatsBottomSection from "./components/LaundromatsBottomSection/LaundromatsBottomSection";
import RightNav from "./components/Commons/RightNav/RightNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Admin/Account/Details/Details";
import Payments from "./components/Admin/Account/Payments/Payments";
import LeftNav from "./components/Commons/LeftNav/LeftNav";
import store from "./store.js";
import { Provider } from "react-redux";
import Regions from "./components/Admin/Account/Regions/Regions";
import Taxes from "./components/Admin/Account/Taxes/Taxes";
import Settings from "./components/Admin/Account/Settings/Settings";
import Preferences from "./components/Admin/Account/Preferences/Preferences";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          {/* <LaundromatsBottomSection /> */}
          <Routes>
            <Route path="/" element={<LaundromatsBottomSection />} />
            <Route path="/admin" element={<LeftNav />}>
              <Route path="account" element={<RightNav />}>
                <Route index element={<Details />} />
                <Route path="details" element={<Details />} />
                <Route path="payments" element={<Payments />} />
                <Route path="regions" element={<Regions />} />
                <Route path="taxes" element={<Taxes />} />
                <Route path="settings" element={<Settings />} />
                <Route path="preferences" element={<Preferences />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
