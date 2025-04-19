import { Outlet } from "react-router-dom";
import MainPage from "../Pages/site/MainPage";

function PageLayout() {
  return (
    <>
      <MainPage>
        <Outlet />
      </MainPage>
    </>
  );
}

export default PageLayout;
