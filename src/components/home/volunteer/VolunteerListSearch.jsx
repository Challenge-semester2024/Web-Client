//import "styles/home/volunteer/VolunteerListPage.scss";
import calendarImage from "assets/calendar.png";
import { useState } from "react";

const VolunteerListSearch = () => {
  const [isRecruiting, setIsRecruiting] = useState(true);
  const [isRecruited, setIsRecruited] = useState(true);
  return (
    <div className="volunteer-list-search-container">
      <div className="volunteer-list-search-word-container">
        <span className="search-option">검색어</span>
        <input
          type="text"
          className="volunteer-list-search-input"
          placeholder="검색어를 입력하세요"
        />
        <button className="volunteer-list-search-btn">검색</button>
        <button className="volunteer-list-search-reset">초기화</button>
      </div>

      <div className="volunteer-list-search-period-container">
        <span className="search-option">조회 기간</span>
        <div className="volunteer-list-search-start-date-container">
          <input
            type="text"
            className="volunteer-list-search-start-date-input"
            placeholder="연도 - 월 - 일"
          />
          <button className="volunteer-list-search-start-calendar-btn">
            <img
              className="calendar-iamge"
              src={calendarImage}
              alt="calendar"
            />
          </button>
        </div>
        <span className="wave">~</span>
        <div className="volunteer-list-search-end-date-container">
          <input
            type="text"
            className="volunteer-list-search-end-date-input"
            placeholder="연도 - 월 - 일"
          />
          <button className="volunteer-list-search-end-calendar-btn">
            <img
              className="calendar-iamge"
              src={calendarImage}
              alt="calendar"
            />
          </button>
        </div>
      </div>

      <div className="volunteer-list-search-recruit-state-container">
        <span className="search-option">공고 상태</span>
        <button
          type="button"
          className={`recruiting-state-btn ${isRecruiting ? "active" : ""}`}
          onClick={() => {
            setIsRecruiting(!isRecruiting);
          }}
        >
          <svg
            className="item-toggle-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M1.34375 8.16948L7.70305 16.7304L18.4648 1.56445"
              stroke="grey"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <span className="recruiting-state">모집 예정</span>

        <button
          type="button"
          className={`recruited-state-btn ${isRecruited ? "active" : ""}`}
          onClick={() => {
            setIsRecruited(!isRecruited);
          }}
        >
          <svg
            className="item-toggle-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M1.34375 8.16948L7.70305 16.7304L18.4648 1.56445"
              stroke="grey"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <span className="recruited-state">모집중</span>
      </div>
    </div>
  );
};

export default VolunteerListSearch;
