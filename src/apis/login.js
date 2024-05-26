import instance from "./instance";
import { setCookie } from "../utils/cookie";

const emailLogin = async (payload) => {
  try {
    const response = await instance.post("/api/user/login", payload);
    setCookie("token", response.headers.authorization, { expires: 1 });
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

export default emailLogin;
