import { useState } from "react";
import Pagination from "react-js-pagination";
const VolunteerList = () => {
  const [boardData, setBoardData] = useState([
    {
      id: 1,
      title: "제목1",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수1",
    },
    {
      id: 2,
      title: "제목2",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수2",
    },
    {
      id: 3,
      title: "제목3",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수3",
    },
    {
      id: 4,
      title: "제목4",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수4",
    },
    {
      id: 5,
      title: "제목1",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수1",
    },
    {
      id: 6,
      title: "제목2",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수2",
    },
    {
      id: 7,
      title: "제목3",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수3",
    },
    {
      id: 1,
      title: "제목4",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수4",
    },
    {
      id: 1,
      title: "제목1",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수1",
    },
    {
      id: 1,
      title: "제목2",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수2",
    },
    {
      id: 1,
      title: "제목3",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수3",
    },
    {
      id: 1,
      title: "제목4",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수4",
    },
    {
      id: 1,
      title: "제목1",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수1",
    },
    {
      id: 1,
      title: "제목2",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수2",
    },
    {
      id: 1,
      title: "제목15",
      period: "2024.01.01 ~ 2024.02.07",
      status: "15 / 300",
      views: "조회수15",
    },
  ]);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    // page 변경되면 get 요청
    setPage(page);
  };

  const routeToDeatilPage = (id) => {
    console.log(id);
  };

  const routeToRecruitStatePage = (id) => {
    console.log(id);
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
              <td
                className="volunteer-title"
                onClick={() => routeToDeatilPage(item.id)}
              >
                {item.title}
              </td>
              <td>{item.period}</td>
              <td
                className="volunteer-period"
                onClick={() => routeToRecruitStatePage(item.id)}
              >
                {item.status}
              </td>
              <td>{item.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="page-navigation-container">
        <Pagination
          activePage={page} // 현재 페이지
          itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
          totalItemsCount={300} // 총 아이템 갯수
          pageRangeDisplayed={10} // paginator의 페이지 범위
          prevPageText={"< 이전"} // "이전"을 나타낼 텍스트
          nextPageText={"다음 >"} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />
      </div>
    </div>
  );
};

export default VolunteerList;
