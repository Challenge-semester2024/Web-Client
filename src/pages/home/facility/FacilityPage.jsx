import DetailName from "components/home/facility/DetailName";
import { Outlet, useLocation } from "react-router-dom";
import "styles/home/facility/FacilityPage.scss";

const FacilityPage = () => {
  const location = useLocation();
  const lastPath = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  const isGreeting = lastPath === "greeting" ? "active" : "";
  const isIntroduction = lastPath === "introduction" ? "active" : "";
  const isRouteInfo = lastPath === "route-info" ? "active" : "";

  console.log(lastPath);
  return (
    <div className="facility-container">
      <div className="facility-introduction-title">시설 소개</div>
      <div className="facilitay-navigation-container">
        <div className={`navigation-btn ${isGreeting}`}>인사말</div>
        <div className={`navigation-btn ${isIntroduction}`}>시설 소개</div>
        <div className={`navigation-btn ${isRouteInfo}`}>찾아오는 길</div>
      </div>
      <div className="facility-detail-container">
        <DetailName path={lastPath} />
        <Outlet />
      </div>
    </div>
  );
};

export default FacilityPage;
