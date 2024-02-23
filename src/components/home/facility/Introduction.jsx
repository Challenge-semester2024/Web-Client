import "styles/home/facility/Introduction.scss";
import FacilityPictureTable from "./FacilityPictureTable";
import FacilityScaleTable from "./FacilityScaleTable";

const Introduction = () => {
  const data1 = [
    ["층수", "면적", "주요실(용도)", "비고"],
    ["", "", "", ""],
  ];
  const data2 = [
    ["층수", "시설1", "시설2", "시설3", "시설4"],
    ["", "", "", "", ""],
  ];
  return (
    <div className="introduction-container">
      <div className="facility-scale-container">
        <FacilityScaleTable data={data1} />
        <button type="button" className="facility-scale-submit-btn">
          변경사항 저장
        </button>
      </div>
      <div className="facility-picture-container">
        <FacilityPictureTable data={data2} />
        <button type="button" className="facility-picture-submit-btn">
          변경사항 저장
        </button>
      </div>
    </div>
  );
};

export default Introduction;
