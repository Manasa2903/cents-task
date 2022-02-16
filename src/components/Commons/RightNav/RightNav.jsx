import { Link, Outlet } from "react-router-dom";

const RightNav = () => {
  const rightNavItems = [
    { name: "Details", path: "details" },
    { name: "Payments", path: "payments" },
    { name: "Regions", path: "regions" },
    { name: "Taxes", path: "taxes" },
    { name: "Settings", path: "settings" },
    { name: "Preferences", path: "preferences" },
  ];
  const heading = "Account";
  return (
    <div className="admin-container">
      <nav className="right-nav">
        <h1 className="right-nav-heading">{heading}</h1>
        <div className="right-nav-items-container">
          {rightNavItems?.map((eachItem) => (
            <Link
              to={eachItem?.path}
              className="right-nav-item"
              key={eachItem?.name}
            >
              <p className="right-nav-item-name">{eachItem?.name}</p>
            </Link>
          ))}
        </div>
      </nav>

      <div className="account-container">
        <h1 className="account-heading">Account</h1>
        <div className="account-right-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
