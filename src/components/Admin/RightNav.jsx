import DoubleSidebar from "./Account/DoubleSidebar/DoubleSidebar";
import { Outlet } from "react-router-dom";

const RightNav = () => {
  const accountDoubleNavList = [
    { name: "Details", path: "details" },
    { name: "Payments", path: "payments" },
    { name: "Regions", path: "regions" },
    { name: "Taxes", path: "taxes" },
    { name: "Settings", path: "settings" },
    { name: "Preferences", path: "preferences" },
  ];
  return (
    <div className="admin-container">
      <DoubleSidebar doubleNavItems={accountDoubleNavList} heading="Account" />

      <Outlet />
    </div>
  );
};

export default RightNav;
