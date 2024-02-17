import boardIcon from "assets/board.png";
import facilityIcon from "assets/facility.png";
import frequencyQuestion from "assets/frequency_questions.png";
import logo from "assets/logo.png";
import volunteerIcon from "assets/volunteer.png";
const HomeSidebar = () => {
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
        </div>
        <div className="volunteer-manage-container">
          <img className="volunteer-icon" src={volunteerIcon} alt="volunteer" />
          <span>봉사 관리</span>
        </div>
        <div className="board-manage-container">
          <img className="board-icon" src={boardIcon} alt="board" />
          <span>게시판 관리</span>
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
