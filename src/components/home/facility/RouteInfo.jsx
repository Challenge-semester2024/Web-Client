import { useState } from "react";
import "styles/home/facility/RouteInfo.scss";

const RouteInfo = () => {
  const [routeInfo, setRouteInfo] = useState("");
  const addressInfo = ["경상북도 경산시 하양읍 하양로", "101동 123123호"];
  return (
    <div className="route-info-container">
      <div className="facility-address-container">
        <textarea
          className="facility-address-info"
          value={addressInfo.join("\n")}
          readOnly
        />
      </div>
      <div className="facility-route-info-container">
        <div className="tip-container">
          <div className="route-info-tool-tip">
            주변 건물, 주차 공간 등 추가적인 정보를 입력해주세요.
          </div>
          <div className="word-cnt">({routeInfo.length}/500)</div>
        </div>

        <textarea
          className="facility-route-info"
          value={routeInfo}
          onChange={(e) => {
            setRouteInfo(e.target.value);
          }}
        />
        <button type="button" className="facility-route-info-submit-btn">
          변경사항 저장
        </button>
      </div>
    </div>
  );
};

export default RouteInfo;
