import { FaRegUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { GiClothesline } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left-container">
        <Link to="/admin" className="navbar-link-container">
          <FiSettings className="navbar-settings-icon" />
          <h4>Admin</h4>
        </Link>
        <Link to="/" className="navbar-link-container">
          <GiClothesline className="navbar-settings-icon" />
          <h4>Laundromats</h4>
        </Link>
      </div>

      <div className="navbar-middle-container">
        <button className="navbar-all-locations">
          <AiOutlineShop className="navbar-locations-icon" />
          <p className="navbar-all-locations-para">All Locations</p>
        </button>
      </div>

      <div className="navbar-right-container">
        <h1 className="navbar-logo">C</h1>
        <a
          href="https://cents.canny.io/feature-requests"
          className="navbar-link"
        >
          Give your two Cents
        </a>
        <FaRegUserCircle className="navbar-profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
