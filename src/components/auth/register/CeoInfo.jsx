import { Form } from "react-router-dom";
import "styles/auth/register/CeoInfo.scss";
const CeoInfo = () => {
  return (
    <Form className="ceo-info-container" method="post" action="">
      <div className="ceo-email-container">
        <span className="ceo-email">이메일</span>
        <span className="important-sign">*</span>
        <div className="ceo-email-input-container">
          <input
            type="email"
            name="ceo-email"
            placeholder="이메일 입력"
            className="ceo-email-input"
          />
          <button type="button" className="ceo-email-verify-btn">
            인증요청
          </button>
        </div>
        <input
          type="password"
          placeholder="인증번호 4자리 입력"
          className="ceo-email-verify-input"
        />
      </div>

      <div className="ceo-phone-container">
        <span className="ceo-phone">관리자 전화번호</span>
        <span className="important-sign">*</span>

        <div className="ceo-phone-input-container">
          <input
            type="number"
            name="ceo-phone"
            placeholder="'-' 빼고 입력"
            className="ceo-phone-input"
          />
          <button type="button" className="ceo-phone-verify-btn">
            인증요청
          </button>
        </div>
        <input
          type="password"
          placeholder="인증번호 4자리 입력"
          className="ceo-phone-verify-input"
        />
      </div>

      <div className="ceo-password-container">
        <span className="ceo-email">비밀번호</span>
        <span className="important-sign">*</span>
        <input
          type="password"
          name="ceo-password"
          placeholder="비밀번호 입력"
          className="ceo-password-input"
        />
        <input
          type="password"
          placeholder="비밀번호 재입력"
          className="ceo-password-verify-input"
        />
      </div>

      <button type="submit" className="ceo-info-submit-btn">
        제출
      </button>
    </Form>
  );
};

export default CeoInfo;
