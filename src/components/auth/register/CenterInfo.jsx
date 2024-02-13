import { useState } from "react";
import { Form } from "react-router-dom";
import "styles/auth/register/CenterInfo.scss";
const CenterInfo = () => {
  const [businessFile, setBusinessFile] = useState();
  const [businessFileName, setBusinessFileName] = useState("");
  console.log(businessFile);
  return (
    <Form className="center-info-container" method="post" action="/register">
      <div className="ceo-name-container">
        <span className="ceo-name">대표자명</span>
        <span className="important-sign">*</span>
        <input
          name="ceo-name"
          placeholder="대표자명"
          className="ceo-name-input"
        />
      </div>

      <div className="center-name-container">
        <span className="center-name">기관명</span>
        <span className="important-sign">*</span>
        <input
          name="center-name"
          placeholder="기관명"
          className="center-name-input"
        />
      </div>

      <div className="center-phone-container">
        <span className="center-phone">기관전화번호</span>
        <span className="important-sign">*</span>
        <input
          name="center-phone"
          placeholder="'-' 빼고 숫자만 입력"
          className="center-phone-input"
        />
      </div>

      <div className="center-address-container">
        <span className="center-address">기관 주소</span>
        <span className="important-sign">*</span>
        <div className="center-road-address-container">
          <input
            name="center-road-address"
            placeholder="기관 주소를 입력"
            className="center-road-address-input"
          />
          <button type="button" className="center-road-address-search-btn">
            주소 검색
          </button>
        </div>

        <input
          name="center-detail-address"
          placeholder="기관 주소를 입력"
          className="center-detail-address-input"
        />
      </div>

      <div className="business-certificate-container">
        <span className="business-certificate">사업자 등록증</span>
        <span className="important-sign">*</span>
        <span className="file-type-sign">
          (pdf, docx, hwp 확장자를 사용하는 50mb 이하의 파일)
        </span>
        <div className="business-certificate-select-container">
          <input
            name="center-business-certificate"
            id="business-certificate-input"
            type="text"
            placeholder="파일 업로드"
            className="business-certificate-input"
            value={businessFileName}
            readOnly
          />

          <label
            className="business-certificate-label"
            htmlFor="business-certificate-search-btn"
          >
            파일 선택
          </label>
          <input
            id="business-certificate-search-btn"
            type="file"
            accept=".pdf"
            className="business-certificate-search-btn"
            onChange={(e) => {
              setBusinessFile(e.target.files[0]);
              setBusinessFileName(e.target.files[0].name);
            }}
          />
        </div>

        <button type="submit" className="enter-info-submit-btn">
          제출
        </button>
      </div>
    </Form>
  );
};

export default CenterInfo;
