import "./global.scss";
import Navbar from "./components/Navbar/Navbar";
import LaundromatsBottomSection from "./components/LaundromatsBottomSection/LaundromatsBottomSection";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <LaundromatsBottomSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
