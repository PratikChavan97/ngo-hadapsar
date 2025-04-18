import { Outlet } from "react-router-dom";
import MainPage from "../Pages/site/MainPage";

function AppLayout() {
  return (
    <>
      <MainPage>
        <Outlet />
      </MainPage>
    </>
  );
}

export default AppLayout;
