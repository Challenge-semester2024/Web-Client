import axios from "axios";
import { SERVER_IP } from "constants/api";

/**
 * auth API 요청 Interface
 * @param {String} url 통신 URI
 * @param {String} data 입력 데이터
 * @param {String} params 쿼리 데이터
 * @returns 응답 객체
 */
const authAPIInterface = async (
  url,
  signUpDto = null,
  params = null,
  contentType = "application/json"
) => {
  try {
    const res = await axios.post(`${SERVER_IP}/${url}`, signUpDto, {
      headers: { "Content-Type": contentType },
    });

    return res.data;
  } catch (e) {
    console.error("error : ", e);
  }
};

const requestLogin = async (data) => {
  const res = await authAPIInterface("/login", data);
  return res;
};

const requestRegister = async (registerInfo) => {
  let formData = new FormData();

  let { centerInfo, ceoInfo, certificateFile } = registerInfo;
  const signUpDto = {
    centerInfo,
    ceoInfo,
  };

  const json = JSON.stringify(signUpDto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("signUpDto", blob);
  formData.append("certificateFile", certificateFile);

  const res = await authAPIInterface(
    "api/auth/signUp",
    formData,
    null,
    "multipart/form-data"
  );
  return res;
};

export { requestLogin, requestRegister };
