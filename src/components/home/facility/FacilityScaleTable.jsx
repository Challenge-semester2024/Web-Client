import { useState } from "react";
import "styles/home/facility/FacilityScaleTable.scss";

const FacilityScaleTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const placeholders = [
    "층수",
    "m^2",
    "숙소 101호, 102호(12인실 2개소), 소회의실, 창고 등 시설 용도",
    "완공 예정 시기 등 추가정보",
  ];
  const addRow = () => {
    const newRow = new Array(data[0].length).fill("");
    setTableData([...tableData, newRow]);
  };
  const handleChange = (i, j, event) => {
    const newData = [...tableData];
    newData[i][j] = event.target.value;
    setTableData(newData);
  };

  console.log(tableData);

  return (
    <>
      <div className="scale-table-controll-container">
        <span className="scale-tool-tip">
          간단한 층별 시설 소개를 해주세요.
        </span>
        <table className="table-container">
          <tbody className="table-body">
            {tableData.map((row, i) => (
              <tr className={`table-row ${i === 0 ? "first-row" : ""}`} key={i}>
                {row.map((cell, j) => (
                  <td className={`table-col ${j === 2 ? "majar" : ""}`} key={j}>
                    <input
                      type="text"
                      placeholder={placeholders[j]}
                      value={cell}
                      onChange={(event) => handleChange(i, j, event)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" className="scale-floor-add-btn" onClick={addRow}>
        층수 추가+
      </button>
    </>
  );
};

export default FacilityScaleTable;
