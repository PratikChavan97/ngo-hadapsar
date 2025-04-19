import { NavLink } from "react-router-dom";

import "./module.DashboardNavigation.css";

function DashboardNavigation() {
  return (
    <div className="navigation">
      <h1>"Setting sign" Dashboard</h1>
      <nav>
        <NavLink to="">
          Home <span>&gt;</span>
        </NavLink>
        <NavLink to="">
          Donation <span>&gt;</span>
        </NavLink>
        <NavLink to="">
          Projects <span>&gt;</span>
        </NavLink>
        <NavLink to="">
          Blogs <span>&gt;</span>
        </NavLink>
        <NavLink to="">
          Users <span>&gt;</span>
        </NavLink>
        <NavLink to="">
          Settings <span>&gt;</span>
        </NavLink>
        <NavLink to="">
          Help <span>&gt;</span>
        </NavLink>
      </nav>
      <div>
        <img src="" alt="" />
        <div>
          <h3>UserName</h3>
          <p>User Designation</p>
        </div>
        <span>&darr;</span>
      </div>
    </div>
  );
}

export default DashboardNavigation;
