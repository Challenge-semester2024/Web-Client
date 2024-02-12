import { useState } from "react";
import { Form } from "react-router-dom";
import "styles/auth/login/LoginForm.scss";

const LoginForm = ({ myEmail }) => {
  const [email, setEmail] = useState(myEmail || "");
  const [password, setPassword] = useState("");
  const [isSave, setIsSave] = useState(false); // 로직 추가 예정

  const emailSave = () => {
    if (isSave) {
      localStorage.setItem("myEmail", email);
    } else {
      localStorage.removeItem("myEmail");
    }
  };

  return (
    <Form method="post" onSubmit={emailSave}>
      <div className="login-form-container">
        <div className="login-input-container">
          <div className="login-email-container">
            <input
              className="login-email-form"
              name="email"
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="login-password-container">
            <input
              className="login-password-form"
              name="password"
              type="password"
              placeholder="비밀 번호"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="save-login-info-container">
          <button
            type="button"
            className={`save-login-info-btn ${isSave ? "active" : ""}`}
            onClick={() => {
              setIsSave(!isSave);
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
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span className="save-login-info">로그인 정보 저장</span>
        </div>
        <button type="submit" className="login-btn">
          로그인
        </button>
      </div>
    </Form>
  );
};

export default LoginForm;
