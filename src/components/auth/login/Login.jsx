import LoginHeader from "components/auth/login/LoginHeader";
import "styles/auth/login/Login.scss";
import LoginForm from "./LoginForm";

const Login = ({ myEmail }) => {
  return (
    <div className="login-container">
      <LoginHeader />
      <LoginForm myEmail={myEmail} />
    </div>
  );
};

export default Login;
