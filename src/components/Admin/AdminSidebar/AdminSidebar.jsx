import { BsPeople, BsNewspaper } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { RiStore2Line } from "react-icons/ri";
import { MdOutlineDevices, MdOutlineLocalOffer } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <nav className="admin-sidebar">
      <div className="admin-sidebar-top">
        <div className="admin-sidebar-items">
          <RiStore2Line className="admin-sidebar-icon" />
          <p className="admin-sidebar-para">Locations</p>
        </div>
        <div className="admin-sidebar-items">
          <BsPeople className="admin-sidebar-icon" />
          <p className="admin-sidebar-para">Teams</p>
        </div>
        <div className="admin-sidebar-items">
          <GiWashingMachine className="admin-sidebar-icon" />
          <p className="admin-sidebar-para">Products & Services</p>
        </div>
        <div className="admin-sidebar-items">
          <BsNewspaper className="admin-sidebar-icon" />
          <p className="admin-sidebar-para">Tasks</p>
        </div>
        <div className="admin-sidebar-items">
          <MdOutlineDevices className="admin-sidebar-icon" />
          <p className="admin-sidebar-para">Devices</p>
        </div>
        <div className="admin-sidebar-items">
          <MdOutlineLocalOffer className="admin-sidebar-icon" />
          <p className="admin-sidebar-para">Promotions</p>
        </div>
      </div>
      <div className="admin-sidebar-top">
        <Link to="/admin/account" className="admin-sidebar-items">
          <FiSettings className="admin-sidebar-icon" />
          <p className="admin-sidebar-para">Account</p>
        </Link>
      </div>
    </nav>
  );
};

export default AdminSidebar;
