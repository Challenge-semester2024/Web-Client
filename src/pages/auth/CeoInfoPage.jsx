import CeoInfo from "components/auth/register/CeoInfo";
import { redirect } from "react-router-dom";

const CeoInfoPage = () => {
  return <CeoInfo />;
};

export default CeoInfoPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const CeoData = {
    ceoName: data.get("ceo-email"),
    centerName: data.get("ceo-phone"),
    centerPhone: data.get("ceo-password"),
  };

  console.log(CeoData);

  return redirect("/register/wait");
};
