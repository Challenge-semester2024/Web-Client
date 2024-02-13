import RegisterHeader from "components/auth/register/RegisterHeader";
import RegisterStatus from "components/auth/register/RegisterStatus";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import "styles/auth/register/RegisterPage.scss";

const RegisterPage = () => {
  const currentStatus = useLoaderData(); // 현재 마지막 경로 반환
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="register-container">
      <RegisterHeader />
      <RegisterStatus currentStatus={currentStatus} />
      <Outlet context={{ isSubmitting }} />
    </div>
  );
};

export default RegisterPage;

export const loader = ({ request }) => {
  const { pathname } = new URL(request.url);
  const currentStatus = pathname.split("/").slice(-1)[0];

  return currentStatus;
};
