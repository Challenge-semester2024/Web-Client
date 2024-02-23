import HomeHeader from "components/home/HomeHeader";
import HomeSidebar from "components/home/HomeSidebar";
import { Outlet } from "react-router-dom";
import "styles/home/HomeLayout.scss";
const HomeLayout = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-body-container">
        <HomeSidebar />
        <div className="content-container">
          <HomeHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
