import instance from "./instance";

const emailLogin = async (payload) => {
  try {
    const res = await instance.post("/api/user/login", payload);
    // console.log(response.headers.authorization);
    const response = {
      token: res.headers.authorization,
      data: res.data,
    };
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

export default emailLogin;
