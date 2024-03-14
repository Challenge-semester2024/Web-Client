import DetailName from "components/home/volunteer/DetailName";
import { Outlet, useLocation } from "react-router-dom";
import "styles/home/volunteer/VolunteerUploadPage.scss";
const VolunteerUploadPage = () => {
  const location = useLocation();
  const lastPath = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  const volunteerInfo = lastPath === "upload" ? "active" : "";
  const volunteerDetailInfo = lastPath === "detail" ? "active" : "";

  return (
    <div className="volunteer-upload-page-container">
      <div className="volunteer-upload-page-title">봉사 공고 등록</div>
      <div className="navigation-bar-container">
        <div className={`navigation-bar ${volunteerInfo}`}>기본 정보</div>
        <div className={`navigation-bar ${volunteerDetailInfo}`}>상세 정보</div>
      </div>
      <div className="volunteer-upload-detail-container">
        <DetailName path={lastPath} />
        <Outlet />
      </div>
    </div>
  );
};

export default VolunteerUploadPage;
