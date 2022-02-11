import AdminSidebar from "./AdminSidebar/AdminSidebar";
import DoubleSidebar from "./Account/DoubleSidebar/DoubleSidebar";

const Admin = () => {
  const accountDoubleNavList = [
    { name: "Details", path: "/admin/account/details" },
    { name: "Payments", path: "/admin/account/payments" },
    { name: "Regions", path: "/admin/account/regions" },
    { name: "Taxes", path: "/admin/account/taxes" },
    { name: "Settings", path: "/admin/account/settings" },
    { name: "Preferences", path: "/admin/account/preferences" },
  ];
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div>
        <DoubleSidebar
          doubleNavItems={accountDoubleNavList}
          heading="Account"
        />
      </div>
    </div>
  );
};

export default Admin;
