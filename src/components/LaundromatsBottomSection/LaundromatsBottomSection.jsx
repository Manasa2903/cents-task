import Orders from "./Orders/Orders";
import Sidebar from "./Sidebar/Sidebar";

const LaundromatsBottomSection = () => {
  return (
    <div className="laundromats-bottom-container">
      <Sidebar />
      <Orders />
    </div>
  );
};

export default LaundromatsBottomSection;
