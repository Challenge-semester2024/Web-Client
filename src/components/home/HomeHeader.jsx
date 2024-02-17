import profileImage from "assets/profile.png";

const HomeHeader = ({ title, centerName }) => {
  return (
    <div className="content-header-container">
      <span className="hompage-header-title">
        {title || "보육원 관리 페이지"}
      </span>
      <span className="divide-line">|</span>
      <div className="profile-container">
        <img className="profile-image" src={profileImage} alt="profile" />
        <span className="center-name">{centerName || "xx보육원"}</span>
        <button className="logout-btn">로그아웃</button>
      </div>
    </div>
  );
};

export default HomeHeader;
