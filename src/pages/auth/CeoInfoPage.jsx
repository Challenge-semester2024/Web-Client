import CeoInfo from "components/auth/register/CeoInfo";
import { redirect } from "react-router-dom";
import { requestRegister } from "services/auth/auth";
import { CenterInfoController } from "store/auth";

const CeoInfoPage = () => {
  return <CeoInfo />;
};

export default CeoInfoPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const CeoInfo = {
    ceoEmail: data.get("ceo-email"),
    centerName: data.get("ceo-phone"),
    centerPhone: data.get("ceo-password"),
  };

  const { file2, CenterInfo } = CenterInfoController.getState();
  const registerInfo = {
    CenterInfo,
    CeoInfo,
    file2,
  };

  const res = await requestRegister(registerInfo);
  if (res === 200) {
    return redirect("/register/wait");
  }
  alert("회원가입중 오류가 발생하였습니다.");
  return redirect("/");
};
