import { BsBasket, BsPerson, BsNewspaper } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
//import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="laundromats-sidebar">
      <Link to="/dashboard/orders" className="laundromats-sidebar-items">
        <BsBasket className="laundromats-sidebar-icon" />
        <p className="laundromats-sidebar-para">Orders</p>
      </Link>
      <Link to="/dashboard/customers" className="laundromats-sidebar-items">
        <BsPerson className="laundromats-sidebar-icon" />
        <p className="laundromats-sidebar-para">Customers</p>
      </Link>
      <Link to="/dashboard/machines" className="laundromats-sidebar-items">
        <GiWashingMachine className="laundromats-sidebar-icon" />
        <p className="laundromats-sidebar-para">Machines</p>
      </Link>
      <Link to="/dashboard/reports" className="laundromats-sidebar-items">
        <BsNewspaper className="laundromats-sidebar-icon" />
        <p className="laundromats-sidebar-para">Reports</p>
      </Link>
    </nav>
  );
};

export default Sidebar;
