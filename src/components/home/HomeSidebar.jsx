import boardIcon from "assets/board.png";
import facilityIcon from "assets/facility.png";
import frequencyQuestion from "assets/frequency_questions.png";
import logo from "assets/logo.png";
import volunteerIcon from "assets/volunteer.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const HomeSidebar = () => {
  const [showfacilityDetail, setShowfacilityDetail] = useState(false);
  const [showVolunteerDetail, setShowVolunteerDetail] = useState(false);
  const [showBorderDetail, setShowBorderDetail] = useState(false);
  return (
    <div className="sidebar-container">
      <img className="logo-image" src={logo} alt="logo" />

      <div className="volunteer-quick-select-container">
        <button className="volunteer-quick-signup-btn">봉사 등록</button>
        <button className="volunteer-quick-manage-btn">봉사 관리</button>
      </div>

      <div className="home-navigation-container">
        <div className="facility-introduction-container">
          <img className="facility-icon" src={facilityIcon} alt="facility" />
          <span>시설 소개</span>
          <button
            className={`rotate-btn ${showfacilityDetail ? "rotated" : ""}`}
            onClick={() => {
              setShowfacilityDetail(!showfacilityDetail);
            }}
          >
            {">"}
          </button>
          {showfacilityDetail && (
            <div className="detail-page">
              <Link to="facility/greeting">인사말</Link>
              <Link to="facility/introduction">시설소개</Link>
              <Link to="facility/route-info">찾아오는 길</Link>
            </div>
          )}
        </div>

        <div className="volunteer-manage-container">
          <img className="volunteer-icon" src={volunteerIcon} alt="volunteer" />
          <span>봉사 관리</span>
          <button
            className={`rotate-btn ${showVolunteerDetail ? "rotated" : ""}`}
            onClick={() => {
              setShowVolunteerDetail(!showVolunteerDetail);
            }}
          >
            {">"}
          </button>
          {showVolunteerDetail && (
            <div className="detail-page">
              <Link to="volunteer/recruitment/list">봉사 공고 목록</Link>
              <Link to="volunteer/recruitment/signup">봉사 공고 등록</Link>
              <Link to="volunteer/manage">봉사자 관리</Link>
            </div>
          )}
        </div>

        <div className="board-manage-container">
          <img className="board-icon" src={boardIcon} alt="board" />
          <span>게시판 관리</span>
          <button
            className={`rotate-btn ${showBorderDetail ? "rotated" : ""}`}
            onClick={() => {
              setShowBorderDetail(!showBorderDetail);
            }}
          >
            {">"}
          </button>
          {showBorderDetail && (
            <div className="detail-page">
              <Link to="volunteer/board">봉사 게시판</Link>
              <Link to="support/board">후원 게시판</Link>
            </div>
          )}
        </div>
      </div>

      <img
        className="frequency-question-image"
        src={frequencyQuestion}
        alt="frequency-question"
      />
    </div>
  );
};

export default HomeSidebar;
