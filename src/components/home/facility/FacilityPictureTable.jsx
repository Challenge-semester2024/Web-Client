import { useState } from "react";
import "styles/home/facility/FacilityPictureTable.scss";

const FacilityPictureTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const placeholders = [
    "층수",
    "사진 선택",
    "사진 선택",
    "사진 선택",
    "사진 선택",
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
      <div className="picture-table-controll-container">
        <span className="facility-picture-tool-tip">
          층별 시설 사진을 해주세요.
        </span>
        <table className="table-container">
          <tbody className="table-body">
            {tableData.map((row, i) => (
              <tr className={`table-row ${i === 0 ? "first-row" : ""}`} key={i}>
                {row.map((cell, j) => (
                  <td className="table-col" key={j}>
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
      <button type="button" className="picture-floor-add-btn" onClick={addRow}>
        층수 추가+
      </button>
    </>
  );
};

export default FacilityPictureTable;
