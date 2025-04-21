import { Outlet } from "react-router-dom";
import DashboardNavigation from "../ui/dashboard/DashboardNavigation";

import "./module.DashboardLayout.css";
import DashboardData from "../ui/dashboard/DashboardData";

function DashboardLayout() {
  return (
    <div className="dashboard">
      <DashboardNavigation />
      <DashboardData>
        <Outlet />
      </DashboardData>
    </div>
  );
}

export default DashboardLayout;
