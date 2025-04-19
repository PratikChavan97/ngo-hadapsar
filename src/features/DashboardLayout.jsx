import { Outlet } from "react-router-dom";
import DashboardNavigation from "../ui/dashboard/DashboardNavigation";

import "./module.DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="dashboard">
      <DashboardNavigation />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
