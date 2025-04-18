import { Outlet } from "react-router-dom";
import MainPage from "../Pages/site/MainPage";

function AppLayout() {
  return (
    <div>
      <MainPage>
        <Outlet />
      </MainPage>
    </div>
  );
}

export default AppLayout;
