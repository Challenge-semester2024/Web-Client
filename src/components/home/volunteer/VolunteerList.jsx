import { useState } from "react";
import Pagination from "react-js-pagination";
const VolunteerList = () => {
  const [boardData, setBoardData] = useState([
    {
      title: "제목1",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수1",
    },
    {
      title: "제목2",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수2",
    },
    {
      title: "제목3",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수3",
    },
    {
      title: "제목4",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수4",
    },
    {
      title: "제목1",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수1",
    },
    {
      title: "제목2",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수2",
    },
    {
      title: "제목3",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수3",
    },
    {
      title: "제목4",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수4",
    },
    {
      title: "제목1",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수1",
    },
    {
      title: "제목2",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수2",
    },
    {
      title: "제목3",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수3",
    },
    {
      title: "제목4",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수4",
    },
    {
      title: "제목1",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수1",
    },
    {
      title: "제목2",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수2",
    },
    {
      title: "제목15",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수15",
    },
  ]);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="volunteer-list-container">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>공고 제목</th>
            <th>봉사 기간</th>
            <th>모집현황</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {boardData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.period}</td>
              <td>{item.status}</td>
              <td>{item.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="page-navigation-container">
        <Pagination
          activePage={page} // 현재 페이지
          itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
          totalItemsCount={450} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={"< 이전"} // "이전"을 나타낼 텍스트
          nextPageText={"다음 >"} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />
      </div>
    </div>
  );
};

export default VolunteerList;
