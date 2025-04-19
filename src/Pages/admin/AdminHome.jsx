import { NavLink } from "react-bootstrap";
import "./module.AdminHome.css";

function AdminHome() {
  return (
    <div className="dashboard">
      <div className="navigation">
        <h1>"Setting sign" Dashboard</h1>
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="">Donation</NavLink>
          <NavLink to="">Projects</NavLink>
          <NavLink to="">Blogs</NavLink>
          <NavLink to="">Users</NavLink>
          <NavLink to="">Settings</NavLink>
          <NavLink to="">Help</NavLink>
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
      <div className="data"></div>
    </div>
  );
}

export default AdminHome;
